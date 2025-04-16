namespace shared.Models;

public class Result<T>(bool success, T? data = default, Error? error = null)
{
    public bool Success { get; set; } = success;
    public Error? Error { get; set; } = error;
    public T? Data { get; set; } = data;
}

public class Result(bool success, Error? error = null)
{
    public bool Success { get; set; } = success;
    public Error? Error { get; set; } = error;
}

public class Error
{
    public List<String>? Messages { get; set; } = [];
    public string? Title { get; set; }
    public string? Hint { get; set; }
}