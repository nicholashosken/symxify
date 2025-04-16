namespace api.Endpoints;

public static class MapEndpoints
{
    public static void MapRoutes(this WebApplication app)
    {
        var operationsGroup = app.MapGroup("/api/v1/available-operations");
        OperationsRoutes.MapGets(operationsGroup);
        OperationsRoutes.MapPosts(operationsGroup);

        var symxchangeGroup = app.MapGroup("/api/v1/symxchange");
        SymxchangeRoutes.MapPosts(symxchangeGroup);
    }
}