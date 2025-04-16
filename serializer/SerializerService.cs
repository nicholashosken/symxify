using System.Runtime.CompilerServices;
using System.Text.Json;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using shared.Models;

namespace serializer;

public class SerializerService(HttpClient _client, IOptions<SerializerOptions> _options)
{
    private static List<OperationMap> map = new List<OperationMap>();

    public List<OperationMap> GetMap()
    {
        return map;
    }

    public async Task GenerateOperationMap()
    {
        HttpResponseMessage request = new HttpResponseMessage();
        try
        {
            request = await _client.GetAsync(_options.Value.CdnUrl);
        }
        catch (HttpRequestException ex)
        {
            throw new Exception(ex.Message);
        }

        if (!request.IsSuccessStatusCode)
        {
            throw new Exception($"Request failed: {request.ReasonPhrase}");
        }

        string content = await request.Content.ReadAsStringAsync();
        var paths = JsonSerializer.Deserialize<List<string>>(content);

        var fileMap = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);

        foreach (var url in paths)
        {
            var filename = Path.GetFileName(new Uri(url).LocalPath);
            var xml = await _client.GetStringAsync(url);
            fileMap[filename] = xml;
        }

        var parser = new WsdlParser(_client);

        foreach (var file in fileMap)
        {
            if (file.Key.Contains(".wsdl"))
            {
                var filename = file.Key.Split('.')[0];
                var wsdlUrl = filename;
                var ops = await parser.ParseFromWsdl(file.Value, externalXsds: fileMap
                    .Where(x => x.Key.Contains(filename) && !x.Key.Contains(".wsdl")).ToDictionary());
                map.AddRange(ops);
            }
        }
    }
}