using System.Net.Http;
using System.Web.Services.Description;
using System.Xml;
using System.Xml.Schema;
using System.Xml.Serialization;
using shared.Models;

public class WsdlParser
{
    private readonly HttpClient _http;

    public WsdlParser(HttpClient httpClient)
    {
        _http = httpClient;
    }

    public async Task<List<OperationMap>> ParseFromWsdl(string wsdl, Dictionary<string, string> externalXsds)
    {
        using var reader = XmlReader.Create(new StringReader(wsdl));

        var serviceDescription = ServiceDescription.Read(reader);
        var schemas = LoadSchemas(serviceDescription.Types.Schemas, externalXsds);

        return await ParseAsync(serviceDescription, schemas);
    }

    public async Task<List<OperationMap>> ParseAsync(ServiceDescription serviceDescription,
        XmlSchemaSet schemas)
    {
        var operations = new List<OperationMap>();

        var messages = serviceDescription.Messages.Cast<Message>().ToDictionary(m => m.Name);

        foreach (PortType port in serviceDescription.PortTypes)
        {
            foreach (Operation op in port.Operations)
            {
                var opMap = new OperationMap
                {
                    OperationName = op.Name
                };

                var inputMsgName = op.Messages.Input.Message.Name;
                var outputMsgName = op.Messages.Output.Message.Name;

                if (messages.TryGetValue(inputMsgName, out var inputMsg))
                {
                    var part = inputMsg.Parts[0];
                    opMap.RequestElementName = part.Element.Name;
                    opMap.RequestTypeName = ResolveElementType(part.Element, schemas);
                }

                if (messages.TryGetValue(outputMsgName, out var outputMsg))
                {
                    var part = outputMsg.Parts[0];
                    opMap.ResponseElementName = part.Element.Name;
                    opMap.ResponseTypeName = ResolveElementType(part.Element, schemas);
                    opMap.ObjectNamespace = part.Element.Namespace;
                    // var element = ResolveXsdElement(part.Element, schemas);
                    // if (element != null)
                    // {
                    //     var nested = TryFindNestedElementType(element);
                    //     opMap.ResponseObject = DetermineResponseObject(op.Name, nested);
                    // }
                }

                operations.Add(opMap);
            }
        }

        return operations;
    }

    private static XmlSchemaSet LoadSchemas(XmlSchemas wsdlSchemas, Dictionary<string, string> externalXsds)
    {
        var schemaSet = new XmlSchemaSet();
        var processed = new HashSet<string>();

        foreach (XmlSchema schema in wsdlSchemas)
        {
            schemaSet.Add(schema);
            ResolveImports(schema, schemaSet, processed, externalXsds);
        }

        schemaSet.Compile();
        return schemaSet;
    }

    private static void ResolveImports(XmlSchema schema, XmlSchemaSet set, HashSet<string> processed,
        Dictionary<string, string> externalXsds)
    {
        foreach (XmlSchemaObject include in schema.Includes)
        {
            if (include is XmlSchemaImport import && !string.IsNullOrEmpty(import.SchemaLocation))
            {
                var fileName = Path.GetFileName(import.SchemaLocation);

                if (processed.Contains(fileName))
                    continue;

                if (!externalXsds.TryGetValue(fileName, out var xsdText))
                    continue;

                processed.Add(fileName);

                using var reader = XmlReader.Create(new StringReader(xsdText));
                var importedSchema = XmlSchema.Read(reader, null);
                set.Add(importedSchema);

                ResolveImports(importedSchema, set, processed, externalXsds);
            }
        }
    }

    private static string ResolveElementType(XmlQualifiedName elementName, XmlSchemaSet schemaSet)
    {
        foreach (XmlSchema schema in schemaSet.Schemas())
        {
            if (schema.Elements[elementName] is XmlSchemaElement element)
            {
                return element.SchemaTypeName.IsEmpty
                    ? TryFindInnerElementType(element)
                    : element.SchemaTypeName.ToString();
            }
        }

        return "Unknown";
    }

    private static string TryFindInnerElementType(XmlSchemaElement element)
    {
        if (element.ElementSchemaType is XmlSchemaComplexType complex)
        {
            if (complex.Particle is XmlSchemaSequence seq && seq.Items.Count > 0)
            {
                foreach (var item in seq.Items)
                {
                    if (item is XmlSchemaElement innerEl)
                    {
                        return !innerEl.SchemaTypeName.IsEmpty ? innerEl.SchemaTypeName.Name : innerEl.Name;
                    }
                }
            }
        }

        return "Unknown";
    }

    private static string TryFindNestedElementType(XmlSchemaElement element)
    {
        if (element.ElementSchemaType is XmlSchemaComplexType complex && complex.Particle is XmlSchemaSequence sequence)
        {
            foreach (var item in sequence.Items)
            {
                if (item is XmlSchemaElement innerEl)
                {
                    if (innerEl.ElementSchemaType is XmlSchemaComplexType innerComplex && innerComplex.Particle is XmlSchemaSequence innerSeq)
                    {
                        foreach (var nested in innerSeq.Items)
                        {
                            if (nested is XmlSchemaElement nestedEl)
                            {
                                return !nestedEl.SchemaTypeName.IsEmpty ? nestedEl.SchemaTypeName.Name : nestedEl.Name;
                            }
                        }
                    }
                    return !innerEl.SchemaTypeName.IsEmpty ? innerEl.SchemaTypeName.Name : innerEl.Name;
                }
            }
        }
        return "Unknown";
    }

    private static XmlSchemaElement? ResolveXsdElement(XmlQualifiedName elementName, XmlSchemaSet schemaSet)
    {
        foreach (XmlSchema schema in schemaSet.Schemas())
        {
            if (schema.Elements[elementName] is XmlSchemaElement el)
                return el;
        }

        return null;
    }

    private static string DetermineResponseObject(string operationName, string baseObject)
    {
        if (operationName.StartsWith("update", StringComparison.OrdinalIgnoreCase))
            return "UpdateResponse";
        if (operationName.StartsWith("delete", StringComparison.OrdinalIgnoreCase))
            return "DeleteResponse";

        return baseObject;
    }
}
