namespace Memberwise.Symxify;

using Memberwise.Symxify.Models;
using Microsoft.Extensions.DependencyInjection;


public static class SymxifyServiceCollectionExtensions
{
    public static IServiceCollection AddSymxifyClient(this IServiceCollection services, Action<SymxifyConfig> configure)
    {
        var options = new SymxifyConfig();
        configure(options);

        services.AddSingleton(options);
        services.AddHttpClient<SymxifyConfig>();
        return services;
    }
}