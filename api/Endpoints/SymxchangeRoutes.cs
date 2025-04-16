using System.Text.Json;
using api.Services;
using Microsoft.AspNetCore.Mvc;

namespace api.Endpoints;

public class SymxchangeRoutes
{
    public static void MapPosts(IEndpointRouteBuilder app)
    {
        app.MapPost("{version}/{service}/{operation}", async ([FromServices] ISymxchangeService _symxchangeService,
            string service,
            string version,
            string operation, [FromBody] JsonElement body) =>
        {
            var response = await _symxchangeService.GenerateRequestAsync(version,
                service,
                operation,
                body);
            if (!response.Success)
            {
                return Results.BadRequest(response);
            }

            return Results.Ok(response);
        });

        app.MapPost("/{service}/{operation}", async ([FromServices] ISymxchangeService _symxchangeService,
            string service,
            string operation, [FromBody] JsonElement body) =>
        {
            var response = await _symxchangeService.GenerateRequestAsync("crud",
                service,
                operation,
                body);
            if (!response.Success)
            {
                return Results.BadRequest(response);
            }

            return Results.Ok(response);
        });
    }
}