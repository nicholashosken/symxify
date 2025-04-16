using Microsoft.AspNetCore.Mvc;
using serializer;

namespace api.Endpoints;

public class OperationsRoutes
{
    public static void MapGets(IEndpointRouteBuilder app)
    {
        app.MapGet("/",
            async ([FromServices] SerializerService _serializerService) =>
            {
                return Results.Ok(_serializerService.GetMap());
            }).CacheOutput();
    }

    public static void MapPosts(IEndpointRouteBuilder app)
    {
        app.MapPost("/refresh",
            async ([FromServices] SerializerService _serializerService,
                [FromServices] IHttpContextAccessor _httpContext,
                [FromServices] IConfiguration _config) =>
            {
                _httpContext.HttpContext.Request.Headers.TryGetValue("Authorization", out var authorization);
                if (authorization == _config.GetValue<string>("Authorization"))
                {
                    await _serializerService.GenerateOperationMap();
                    return Results.Ok();
                }

                return Results.Unauthorized();
            });
    }
}