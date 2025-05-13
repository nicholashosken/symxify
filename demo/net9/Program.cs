using AccountService;
using Memberwise.Symxify;
using Memberwise.Symxify.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

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
        AccountNumber = "1234567890",
        DeviceInformation = new DeviceInformation()
        {
            DeviceNumber = 12345,
            DeviceType = "MYSYMX"
        },
        MessageId = "Getting this account!"
    });

    return !resp.Success ? Results.BadRequest(resp.Error) : Results.Ok(resp.Data);
});

app.Run();