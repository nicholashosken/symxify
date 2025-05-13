namespace Memberwise.Symxify;

using Memberwise.Symxify.Models;
using Microsoft.Extensions.DependencyInjection;

public static class SymxifyServiceCollectionExtensions
{
    public static IServiceCollection AddSymxifyClient(this IServiceCollection services, Action<SymxifyConfig> configure)
    {
        var config = new SymxifyConfig();
        configure(config);

        services.AddSingleton(config);

        services.AddHttpClient(); // optional if no global config needed

        services.AddSingleton<SymxifyClient>(sp =>
        {
            var cfg = sp.GetRequiredService<SymxifyConfig>();
            var factory = sp.GetRequiredService<IHttpClientFactory>();
            var httpClient = factory.CreateClient(); // optionally configure it here

            return new SymxifyClient(httpClient, cfg);
        });

        return services;
    }
}
