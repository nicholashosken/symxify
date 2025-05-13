namespace Memberwise.Symxify;

using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using Memberwise.Symxify.Models;

public partial class SymxifyClient
{
    private readonly HttpClient _http;
    private readonly SymxifyConfig _options;

    public SymxifyClient(HttpClient http, SymxifyConfig options)
    {
        _http = http;
        _options = options;
    }

    public async Task<TResponse> RequestAsync<TRequest, TResponse>(string operation, TRequest payload,
        string service)
    {
        var url = $"{_options.SymxifyUrl}/{service}/{operation}";

        var json = JsonSerializer.Serialize(payload);
        var request = new HttpRequestMessage(HttpMethod.Post, url)
        {
            Content = new StringContent(json, Encoding.UTF8, "application/json")
        };

        if (!String.IsNullOrEmpty(_options.SymxifyKey))
        {
            request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", _options.SymxifyKey);
        }

        var response = await _http.SendAsync(request);
        response.EnsureSuccessStatusCode();

        var body = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<TResponse>(body)!;
    }
}