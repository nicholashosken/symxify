using System.Diagnostics;
using System.Globalization;
using System.Net.WebSockets;
using System.Text.Json;
using System.Xml;
using System.Xml.Serialization;
using AccountService;
using api.Infrastructure;
using serializer;
using shared.Models;
using TransactionsService;

namespace api.Services;

public class SymxchangeService(
    Serializer.IRequestXmlSerializerFactory _xmlRequestSerializer,
    Serializer.IResponseXmlSerializerFactory _xmlResponseSerializer,
    IHttpContextAccessor _httpContextAccessor,
    ILogger<SymxchangeService> _logger,
    SerializerService _serializerService,
    IRequestService _requestService,
    IConfiguration _configuration
) : ISymxchangeService
{
    public async Task<Result<object>> GenerateRequestAsync(string? version, string service,
        string operation,
        JsonElement body)
    {
        if (_configuration.GetSection("AvailableSymxchangeVersions").Get<string[]>().Where(x => x == version)
                .FirstOrDefault() == null)
        {
            return new Result<object>(false, null, new Error()
            {
                Title = $"The requested version {version} is not supported",
                Messages = new List<string>()
                {
                    $"Version {version} is not supported"
                },
                Hint =
                    $"The available versions are {JsonSerializer.Serialize(_configuration.GetValue<List<string>>("AvailableSymxchangeVersions"))}"
            });
        }

        _logger.LogInformation("Initiating request.");

        var map = _serializerService.GetMap();

        var thisOperation = map.FirstOrDefault(x => x.OperationName.ToLower() == operation.ToLower());

        if (thisOperation == null)
        {
            _logger.LogError($"Operation {operation} not found.");
            return new Result<object>(false, null, new Error()
            {
                Title = "Operation not found.",
                Messages = new List<string>()
                {
                    $"The requested operation '{operation}' was not found."
                },
                Hint = "Please see the operation map for a full list of available operations."
            });
        }

        _logger.LogInformation($"Operation found: {thisOperation.OperationName}");

        Type type = Type.GetType($"{service}Service.{operation}", false, true);
        if (type == null)
        {
            _logger.LogError($"The evaluated type is invalid and not found in the type registry.");
            return new Result<object>(false, null, new Error()
            {
                Hint = "Please ensure the service, operation (and/or function) are supported.",
                Messages = new List<string>()
                {
                    "The service or operation could not be found."
                },
                Title = "Invalid type or operation"
            });
        }

        _logger.LogInformation($"Type found successfully. Evaluated type: {type.Name}");
        var requestTypeName = $"{service}Service.{thisOperation.RequestTypeName}";
        var responseTypeName = $"{service}Service.{thisOperation.ResponseTypeName}";
        var requestType = Type.GetType(requestTypeName, false, true);
        var responseType = Type.GetType(responseTypeName, false, true);

        if (requestType == null || responseType == null)
        {
            _logger.LogError($"The request type or response type is invalid and not found in the type registry.");
            return new Result<object>(false, null, new Error()
            {
                Hint = "Please ensure the service, operation (and/or function) are supported.",
                Messages = new List<string>()
                {
                    "The service or operation could not be found."
                },
                Title = "Invalid type or operation"
            });
        }

        var requestInstance = JsonSerializer.Deserialize(body.GetRawText(), requestType, new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        });

        if (requestInstance == null)
        {
            _logger.LogError($"Could not deserialize the request payload into type: {requestType.Name}");
            return new Result<object>(false, null, new Error
            {
                Title = "Deserialization Error",
                Messages = new List<string> { "Failed to deserialize the request payload." },
                Hint = "Make sure your request body structure matches the expected request object."
            });
        }

        var parent = Activator.CreateInstance(type);

        var requestProp = type
            .GetProperties()
            .FirstOrDefault(p => p.PropertyType == requestType);

        if (requestProp == null)
        {
            _logger.LogError("Request property of type {RequestType} not found on {ParentType}", requestType.Name,
                type.Name);
            return new Result<object>(false, null, new Error
            {
                Title = "Structure Error",
                Messages = new List<string> { "Could not set the request property on the parent object." },
                Hint = "Ensure the wrapper class contains the request object."
            });
        }

        requestProp.SetValue(parent, requestInstance);

        string innerXml;
        using (var sww = new StringWriter())
        {
            using (var writer = XmlWriter.Create(sww))
            {
                // ✅ Use parent type in XmlSerializer
                var getSerializerMethod = _xmlRequestSerializer
                    .GetType()
                    .GetMethod("GetSerializer")
                    ?.MakeGenericMethod(type); // type = parent wrapper

                var xmlSerializer = getSerializerMethod?.Invoke(_xmlRequestSerializer, null) as XmlSerializer;

                if (xmlSerializer == null)
                {
                    _logger.LogError("XML Serialization failed. Could not get a valid XML serializer for parent type.");
                    return new Result<object>(false, null, new Error()
                    {
                        Hint = "XML serialization failed.",
                        Messages = new List<string>()
                            { "Could not get a valid XML serializer for the parent type." },
                        Title = "Serialization Error"
                    });
                }

                xmlSerializer.Serialize(writer, parent);
                innerXml = sww.ToString().Replace("<?xml version=\"1.0\" encoding=\"utf-16\"?>", "").Trim();
            }
        }

        var operationName = thisOperation.OperationName; // e.g. getSymXClientSelectFields
        var prefixAmount = 3;
        var prefix = service[service.ToLower() == "transactions" ? ..4 : ..prefixAmount]
            .ToLowerInvariant(); // e.g. par, acc, etc.

        var start = innerXml.IndexOf('>') + 1;
        var end = innerXml.LastIndexOf($"</{operationName}>");
        var contentOnly = innerXml[start..end].Trim();

        var wrapped = $"<{prefix}:{operationName}>{contentOnly}</{prefix}:{operationName}>";

        var doc = XmlRequest.GenerateXmlEnvelope(service, wrapped, version, thisOperation, prefix);
        _logger.LogInformation(
            JsonSerializer.Serialize(_configuration.GetSection("SymxchangeConnection:SymxchangeService")));
        var resp = await _requestService.SendRequest(service, doc.OuterXml, new SymxchangeConfig()
        {
            Version = version,
            Port = _configuration["SymxchangeConnection:Port"],
            Url = _configuration["SymxchangeConnection:Host"],
            Secure = _configuration.GetValue<bool>("SymxchangeConnection:Secure"),
        });

        if (!resp.Success)
        {
            _logger.LogError($"{JsonSerializer.Serialize(resp)}");
            return new Result<object>(false, null, resp.Error);
        }

        var typeToReturn = Type.GetType($"{service}Service.{thisOperation.ResponseElementName}", false, true);
        var responseXml =
            DeserializeResponse(resp, thisOperation);

        if (!responseXml.Success)
        {
            var beginning = responseXml.Data!.IndexOf("<faultstring>");
            var ending = responseXml.Data!.IndexOf("</faultstring>");
            return new Result<object>(false, responseXml.Data, new Error()
            {
                Title = "There was an issue with your request.",
                Messages = [responseXml.Data.Substring(beginning + 13, ending - beginning - 13)],
                Hint = "See data for the full error message.",
            });
        }

        using (var reader = new StringReader(responseXml.Data!))
        {
            var xmlTextReader = new XmlTextReader(reader) { Namespaces = true };
            // var t = responseType.GetProperties();

            var getSerializerMethod = _xmlResponseSerializer.GetType()
                .GetMethod("GetSerializer")
                ?.MakeGenericMethod(
                    typeToReturn
                );

            var responseSerializer =
                getSerializerMethod?.Invoke(_xmlResponseSerializer,
                        new object[] { thisOperation.ResponseElementName, thisOperation })
                    as XmlSerializer;

            if (responseSerializer == null)
            {
                _logger.LogError($"Could not get a valid XML serializer for the response type.");
                return new Result<object>(false, null, new Error()
                {
                    Hint = "XML deserialization failed.",
                    Messages = new List<string>() { "Could not get a valid XML serializer for the response type." },
                    Title = "Deserialization Error"
                });
            }

            var responseObject = responseSerializer.Deserialize(xmlTextReader);
            return new Result<object>(true, responseObject);
        }
    }

    private Result<string> DeserializeResponse(Result<XmlDocument> resp, OperationMap operation)
    {
        try
        {
            return new Result<string>(
                true, resp.Data!["soap:Envelope"]!["soap:Body"]![
                    $"tns:{operation.ResponseElementName}"]!.OuterXml
            );
        }
        catch (Exception ex)
        {
            return new Result<string>(false, resp.Data!["soap:Envelope"]!["soap:Body"]!["soap:Fault"]!.OuterXml);
        }
    }
}

public interface ISymxchangeService
{
    public Task<Result<object>> GenerateRequestAsync(string? version, string service, string operation,
        JsonElement body);
}