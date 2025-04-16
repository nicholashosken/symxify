using System.Text;
using System.Xml;
using shared.Models;

namespace api.Infrastructure;

public static class XmlRequest
{
    public static XmlDocument GenerateXmlEnvelope(string service, string request, string version,
        OperationMap operation, string prefix)
    {
        string ns = operation.ObjectNamespace.Split("/")[3];
        string svc = service;
        var soapBuilder = new StringBuilder();
        soapBuilder.AppendLine("<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\"");
        soapBuilder.AppendLine($"xmlns:{prefix}=\"http://www.symxchange.generated.symitar.com/{ns}/{service}\"");
        soapBuilder.AppendLine("xmlns:cmn=\"http://www.symxchange.generated.symitar.com/symxcommon\">");
        soapBuilder.AppendLine("<soapenv:Header/>");
        soapBuilder.AppendLine("<soapenv:Body>");
        soapBuilder.AppendLine(request);
        soapBuilder.AppendLine("</soapenv:Body>");
        soapBuilder.AppendLine("</soapenv:Envelope>");

        XmlDocument doc = new XmlDocument();
        doc.LoadXml(soapBuilder.ToString());

        TraverseXml(doc.DocumentElement!, doc);

        return doc;
    }

    public static void TraverseXml(XmlElement element, XmlDocument xmlDoc)
    {
        if (element == null)
            return;

        if (element.Name.Contains("Date") || element.Name.EndsWith("Dt") || element.Name == "WarningExpiration")
        {
            var succeeded = DateTime.TryParse(element.InnerText, out var date);
            if (succeeded
                && date.Year == 1900
                && date.Day == 1
                && date.Month == 1)
            {
                // Set xsi:nil attribute for the current element
                XmlAttribute xsiNil = xmlDoc.CreateAttribute("xsi", "nil", "http://www.w3.org/2001/XMLSchema-instance");
                xsiNil.Value = "true";
                element.Attributes.Append(xsiNil);
                element.InnerText = "";
            }
        }

        // Traverse child nodes and apply the same logic
        foreach (XmlNode childNode in element.ChildNodes)
        {
            if (childNode.NodeType == XmlNodeType.Element)
            {
                TraverseXml((XmlElement)childNode, xmlDoc);
            }
        }
    }
}