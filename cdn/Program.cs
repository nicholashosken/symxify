using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddHttpContextAccessor();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseStaticFiles();

app.MapGet("/", ([FromServices] IHttpContextAccessor _httpContext) =>
{
    var path = "wwwroot";
    var files = Directory.GetFiles(path, "*", SearchOption.AllDirectories);


    var host = _httpContext.HttpContext.Request.Host;
    var scheme = _httpContext.HttpContext.Request.Scheme;

    List<String> fileUrls = new();
    foreach (var file in files.Where(x => x.EndsWith(".xsd") || x.EndsWith(".wsdl")))
    {
        var p = file.Replace("wwwroot", "");
        // var url = $"/wsdl/{p}";
        fileUrls.Add($"{scheme}://{host}{p}".Replace("\\", "/"));
    }

    return Results.Json(fileUrls);
});

app.Run();