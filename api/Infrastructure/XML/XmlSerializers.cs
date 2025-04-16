using System.Collections.Concurrent;
using System.Xml.Serialization;
using System.Reflection;
using shared.Models;

namespace api.Infrastructure;

public class Serializer
{
    public interface IResponseXmlSerializerFactory
    {
        XmlSerializer GetSerializer<T>(string root, OperationMap op);
        public void PreloadSerializersFromAssembly(Assembly assembly, string @namespace);
    }

    public interface IRequestXmlSerializerFactory
    {
        XmlSerializer GetSerializer<T>();
    }

    // Used when translating responses
    public class XmlResponseSerializerFactory() : IResponseXmlSerializerFactory
    {
        private readonly ConcurrentDictionary<Type, XmlSerializer> _serializerCache = new();

        public XmlSerializer GetSerializer<T>(string root, OperationMap op)
        {
            var type = typeof(T);

            return _serializerCache.GetOrAdd(type, t =>
            {
                var x = new XmlSerializer(t, new XmlRootAttribute(root)
                {
                    Namespace = op.ObjectNamespace
                });

                return x;
            });
        }

        public void PreloadSerializersFromAssembly(Assembly assembly, string @namespace)
        {
            var responseTypes = assembly
                .GetTypes()
                .Where(t =>
                    t.IsClass &&
                    t.IsPublic &&
                    !t.IsAbstract &&
                    t.Namespace == @namespace);

            foreach (var type in responseTypes)
            {
                try
                {
                    var rootName = type
                        .GetCustomAttribute<XmlRootAttribute>()?.ElementName ?? type.Name;

                    if (!_serializerCache.ContainsKey(type))
                    {
                        var serializer = new XmlSerializer(type, new XmlRootAttribute(rootName));
                        _serializerCache.TryAdd(type, serializer);
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"❌ Failed to preload serializer for {type.FullName}: {ex.Message}");
                }
            }
        }
    }

    // Used when translating requests
    public class XmlRequestSerializerFactory : IRequestXmlSerializerFactory
    {
        private readonly ConcurrentDictionary<Type, XmlSerializer> _serializerCache = new();

        public XmlSerializer GetSerializer<T>()
        {
            var type = typeof(T);
            // Try to get the XmlSerializer from the cache, or create it if it doesn't exist
            return _serializerCache.GetOrAdd(type, t => new XmlSerializer(t));
        }

        private string GetPrefixFromService(string service)
        {
            return service.Length >= 3
                ? service.Substring(0, 3).ToLowerInvariant()
                : service.ToLowerInvariant();
        }
    }
}