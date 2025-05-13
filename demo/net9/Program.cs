using AccountService;
using Memberwise.Symxify;
using Memberwise.Symxify.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddHttpClient();

builder.Services.AddSymxifyClient(options =>
    builder.Configuration.GetSection("Symxify").Bind(options));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.MapGet("/get-account", async ([FromServices] SymxifyClient _client) =>
{
    try
    {
        var resp = await _client.GetAccountSelectFields(new AccountSelectFieldsRequest()
        {
            SelectableFields = new AccountSingleSelectableFields()
            {
                IncludeAllAccountFields = true
            },
            Credentials = new CredentialsChoice()
            {
                AdministrativeCredentials = new AdministrativeCredentials()
                {
                    Password = "<PASSWORD>"
                }
            },
            AccountNumber = "99",
            DeviceInformation = new DeviceInformation()
            {
                DeviceNumber = 20548,
                DeviceType = "MYSYMX"
            },
            MessageId = "Getting this account!",
        });
        return !resp.Success ? Results.BadRequest(resp.Error) : Results.Ok(resp.Data);
    }
    catch (Exception e)
    {
        return Results.BadRequest(e.Message);
    }

    
});

app.Run();