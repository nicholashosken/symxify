using System.Reflection;
using api.Infrastructure;
using serializer;

namespace api.HostedService;

public class BackgroundWorker(
    SerializerService _serializerService,
    Serializer.IResponseXmlSerializerFactory _responseSerializer,
    IConfiguration _config,
    IHostApplicationLifetime _lifetime) : IHostedService, IDisposable
{
    public async Task StartAsync(CancellationToken cancellationToken)
    {
        //On start, get the services available from the CDN.
        _lifetime.ApplicationStarted.Register(async () =>
        {
            await Task.Delay(1000); // give kestrel a sec

            try
            {
                await _serializerService.GenerateOperationMap();
            }
            catch (Exception ex)
            {
                Console.WriteLine("❌ Error loading operation map: " + ex.Message);
            }

            var servicesToPreload = _config.GetSection("PreloadedServices").Get<String[]>();
            if (servicesToPreload is not null && servicesToPreload.Length > 0)
            {
                var targetAssembly = Assembly.GetAssembly(this.GetType());
                foreach (var service in servicesToPreload)
                {
                    _responseSerializer.PreloadSerializersFromAssembly(targetAssembly, service);
                }

                Console.WriteLine("✅ Preloaded response serializers.");
            }
        });
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public void Dispose()
    {
    }
}