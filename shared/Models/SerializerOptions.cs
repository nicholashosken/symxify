using System.Text.Json.Serialization;

namespace shared.Models;

public class SerializerOptions
{
    [JsonPropertyName("cdnUrl")] public string CdnUrl { get; set; }
}