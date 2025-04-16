using System.Text;
using System.Text.Json.Serialization;
using System.Xml;
using api.Infrastructure;
using shared.Models;

namespace api.Services;

public class RequestService(
    HttpClient _client,
    ILogger<RequestService> _logger
) : IRequestService
{
    public async Task<Result<XmlDocument>> SendRequest(string service, string request, SymxchangeConfig config)
    {
        var uri = BuildUri(service, config);
        using var requestMessage = new HttpRequestMessage(HttpMethod.Post, uri)
        {
            Content = new StringContent(request, Encoding.UTF8, "application/xml"),
        };
        _logger.LogInformation("Built request message");

        var response = await SendRequest(requestMessage);

        if (!response.Success)
        {
            return new Result<XmlDocument>(false, null, response.Error);
        }

        _logger.LogInformation("Sent request, status code: {StatusCode} received response", response.Data.StatusCode);

        await using (var responseStream = await response.Data.Content.ReadAsStreamAsync())
        {
            var xmlDocument = new XmlDocument();
            xmlDocument.Load(responseStream);

            _logger.LogInformation("Response received and loaded into XmlDocument");

            return new Result<XmlDocument>(true, xmlDocument);
        }

        ;
    }

    private Uri BuildUri(string service, SymxchangeConfig config)
    {
        var basePath = config.Version.ToLower() == "crud" ? "" : $"/{config.Version}";
        var secure = config.Secure ? "https" : "http";
        return new Uri($"{secure}://{config.Url}:{config.Port}/SymXchange{basePath}/{service}");
    }

    private async Task<Result<HttpResponseMessage>> SendRequest(HttpRequestMessage request)
    {
        try
        {
            var response = await _client.SendAsync(request, HttpCompletionOption.ResponseHeadersRead);
            return new Result<HttpResponseMessage>(true, response);
        }
        catch (Exception ex)
        {
            return new Result<HttpResponseMessage>(false, null, new Error()
            {
                Title = "Request Failed.",
                Messages = new List<string>() { ex.Message }
            });
        }
    }
}

public interface IRequestService
{
    public Task<Result<XmlDocument>> SendRequest(string service, string request, SymxchangeConfig config);
}

public class SymxchangeConfig
{
    [JsonPropertyName("url")] public string Url { get; set; }
    [JsonPropertyName("port")] public string Port { get; set; }
    [JsonPropertyName("version")] public string Version { get; set; }
    [JsonPropertyName("certificate")] public string Certificate { get; set; }
    [JsonPropertyName("Secure")] public bool Secure { get; set; }
}