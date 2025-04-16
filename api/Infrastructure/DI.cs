using api.HostedService;
using api.Services;
using serializer;
using shared.Models;

namespace api.Infrastructure;

public static class DI
{
    public static IServiceCollection AddServices(this IServiceCollection services)
    {
        services.AddHttpClient<SerializerService>();
        services.AddHttpContextAccessor();

        services.AddSingleton<Serializer.IResponseXmlSerializerFactory, Serializer.XmlResponseSerializerFactory>();
        services.AddSingleton<Serializer.IRequestXmlSerializerFactory, Serializer.XmlRequestSerializerFactory>();

        services.AddScoped<ISymxchangeService, SymxchangeService>();
        services.AddSingleton<IRequestService, RequestService>();

        services.AddHostedService<BackgroundWorker>();
        
        return services;
    }
}