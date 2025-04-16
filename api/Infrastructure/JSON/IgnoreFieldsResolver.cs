using System.Text.Json;
using System.Text.Json.Serialization;

public class IgnoreFieldsResolver : JsonNamingPolicy
{
    public override string ConvertName(string name)
    {
        return name;
    }
}

public class IgnoreFieldsResolver<T> : JsonConverter<T>
{
    public override T Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        => JsonSerializer.Deserialize<T>(ref reader, options);

    public override void Write(Utf8JsonWriter writer, T value, JsonSerializerOptions options)
    {
        var props = typeof(T).GetProperties()
            .Where(p => !p.Name.Contains("Specified") && !p.Name.Contains("Value"))
            .ToDictionary(
                prop => prop.Name,
                prop => prop.GetValue(value)
            );

        JsonSerializer.Serialize(writer, props, options);
    }
}