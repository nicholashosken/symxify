using System.Security.Cryptography.X509Certificates;
using System.Text;
using api.Endpoints;
using api.HostedService;
using api.Infrastructure;
using api.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using serializer;
using shared.Models;

var builder = WebApplication.CreateBuilder(args);

const string CorsName = "CorsPolicy";

builder.Services.AddServices();
builder.Services.Configure<SerializerOptions>(builder.Configuration.GetSection("Serializer"));
builder.Services.AddHttpClient("SymxchangeClient").ConfigurePrimaryHttpMessageHandler(() =>
{
    var handler = new HttpClientHandler();
    var certPem = builder.Configuration["SymxchangeConnection:CertificateThumbprint"];
    if (String.IsNullOrEmpty(certPem))
    {
        handler.ServerCertificateCustomValidationCallback = (message, serverCert, chain, errors) => { return true; };
    }
    else
    {
        var certBytes = Encoding.UTF8.GetBytes(certPem);
        var cert = new X509Certificate2(certBytes);

        handler.ServerCertificateCustomValidationCallback = (message, serverCert, chain, errors) =>
        {
            // Add your trusted cert to the chain to validate the server
            chain.ChainPolicy.ExtraStore.Add(cert);
            chain.ChainPolicy.VerificationFlags = X509VerificationFlags.AllowUnknownCertificateAuthority;
            chain.ChainPolicy.RevocationMode = X509RevocationMode.NoCheck;

            bool isValid = chain.Build((X509Certificate2)serverCert);
            return isValid;
        };
    }

    return handler;
});


builder.Services.AddSingleton<IRequestService, RequestService>(options =>
{
    return new RequestService(options.GetRequiredService<IHttpClientFactory>().CreateClient("SymxchangeClient"),
        options.GetRequiredService<ILogger<RequestService>>());
});

builder.Services.AddCors(options =>
{
    options.AddPolicy(CorsName,
        builder => builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());
});

// Check if symxchange connection options are configured

if (string.IsNullOrEmpty(builder.Configuration["SymxchangeConnection:Port"]) ||
    string.IsNullOrEmpty(builder.Configuration["SymxchangeConnection:Host"]))
{
    throw new Exception("You must provide a host URL and port to launch this application.");
}

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

app.MapRoutes();

app.UseCors(CorsName);

app.Run();