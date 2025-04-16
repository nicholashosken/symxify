# Symxify Documentation

Welcome to Symxify!

Getting started with Symxify is simple. However, there are lots of options to configure and opinions that you may want to change. Throughout the docs, we'll show you the anatomy of Symxify, what you can change and what you probably _shouldn't_ change.

<!-- ### Want to save time? Visit [Memberwise.com](https://www.memberwise.com/symxify/sign-up) to create an account and get Symxchang-ing in under 5 minutes. -->

Below are two separate sets of instruction - one for pulling the docker container, and one for modifying source files.

### Getting your SymXchange instance ready for Symxify

##### TL;DR - Make sure you have a symxchange instance that's accessible from where ever you are hosting Symxify. Also make sure you're using the persistent `crud` endpoints.

The first step in using Symxify is having a SymXchange instance ready to use. If you do not have SymXchange set up on your core, then you'll have to contact Jack Henry (or your CUSO) to get that set up. You must have at least one service enabled to use Symxify.

⚠️ Note: Symxify only supports the persistent `crud` endpoint. This may change in the future, but realistically, any credit union looking to use Symxify is likely already on the persistent version of SymXchange.

Where ever your SymXchange is hosted must be accessible by Symxify. For example, if you're using Jack Henry's EASE to host your SymXchange, you must contact Jack Henry to allow access from where you are hosting Symxify. You can check the connection between your Symxify host and your Symxchange host in the Symxify dashboard.

Once your instance is ready, run the Symxify container, and navigate to `{container_url}:{ui_port}/dashboard`. The container comes with a user already setup. You can find the username and password information inside your UI configuration.

# Pulling the Docker Container

To begin, simply pull the Symxify container from [Docker Hub](https://hub.docker.com/r/memberwise/symxify). The Docker container comes with all of the available services and objects for SymXchange, and is ready to go off the shelf.

You can run Symxify anywhere a Docker container can ba ran. However, the Symxify projects are meant to be distributed as you see fit. For example your CDN may live somewhere else than your API project.

If you'd like to make deep code changes (e.g., adjust authentication methods or add features), please follow the instructions below.

# Creating from scratch

### Getting Started

To get started, you'll need to install the (xscgen)[https://www.nuget.org/packages/dotnet-xscgen] tool from Nuget. This tool is used to generate the C# types.

<!-- The first thing to take care of is getting your CDN set up. To do this, you'll need to load your CDN with the appropriate WSDL and XSD files. The easiest way to do this is to run the `generate-cdn-files.ps1` script. This will scan your symxchange service list for WSDL and XSD files, and load them into your CDN. This is a required step as the script does some sanitization to create an extra XSD for each service, as the WSDLs for SymXchange often have XSD schemas located inside the WSDLs, which breaks some WSDL tools (such as xscgen.exe)

The easiest way to generate the files is to load the WSDLs into SoapUI, generate documentation, and load those WSDL and XSD files into their own folders, separated by service. E.g,

```
-- Symxchange Folder
  -- Account Service
    -- account.wsdl
    -- account.xsd
    -- account_1.xsd
    -- account_2.xsd
```

☑️ WIP:

To run the script, open PowerShell and navigate to the directory where the script lives, then type `generate-cdn-files.ps1 -symxservicelist {service_url} -outputFolder -{output folder location}`. Ideally you would want to publish these files into your CDN location (`/cdn/wwwroot/wsdl/{version}`) -->

⚠️ Note that Symxify only supports the persistent endpoints. This may change in the future if the need is there.

After the files have been loaded into the CDN, start the CDN and begin accepting requests. The root path of the CDN provides a JSON file of all available WSDL and XSD files for your script and API to consume.

Once the script has completed, you can move to the next step.

### Generating Types

The Symxify API is built on .NET, which means the API requires types to serialize and deserialize information.

To generate types, navigate to the scripts directory and run `generate-references.ps1 -cdnUrl {cdnUrl} -outputFolder {output folder location}`.

This script will consume the JSON file provided by the CDN, and download the WSDL and XSD files. For every service provided, the script will go through the WSDL and XSDs and generate C# types in a unique namespace for that service. E.g., Account Service would be the AccountService namespace in your C# code.

Once the script is complete, move the C# types in the `generate output` folder (located in each service folder) into the API's `SymxchangeObjects` folder. While you don't have to move the types into the `SymxchangeObjects` folder, it's the default location in the `api.csproj` file. If you choose to move the files elsewhere, make sure you update the `api.csproj` file to include that folder.

☑️ WIP: In the future, the script will have an option to output the C# types into a folder of your choosing and the WSDL/XSD files into your CDN, rather than having to manually move them.

⚠️ You must use the XSD files converted by the script. The script generates a new .xsd file that is used by the type generator and by the serializer, and will not function correctly without it.

### Using the API

The Symxify API has a few tasks to complete before it can start up. On start up, Symxify will generate an `operation map` of all available services and functions that can be called. In a nutshell, any qualified service that exists in your CDN will appear in the operation map. The operation map is available via the `/api/v1/available-operations` endpoint by default. This operation map can be used for a variety of functions, such as creating clients, troubleshooting, etc.

```

[{
    "operationName": "getAccountSelectFields",
    "requestElementName": "getAccountSelectFields",
    "requestTypeName": "AccountSelectFieldsRequest",
    "responseElementName": "getAccountSelectFieldsResponse",
    "responseTypeName": "AccountSelectFieldsResponse",
    "responseObject": null,
    "objectNamespace": "http://www.symxchange.generated.symitar.com/crud/account"
  },
  {
    "operationName": "getAccountSelectFieldsFilterChildren",
    "requestElementName": "getAccountSelectFieldsFilterChildren",
    "requestTypeName": "AccountSelectFieldsFilterChildrenRequest",
    "responseElementName": "getAccountSelectFieldsFilterChildrenResponse",
    "responseTypeName": "AccountSelectFieldsFilterChildrenResponse",
    "responseObject": null,
    "objectNamespace": "http://www.symxchange.generated.symitar.com/crud/account"
  }]
```

If you'd like to regenerate this operation map, call the `/api/v1/available-operations/refresh` `POST` endpoint to call the CDN and regenerate.

If an item doesn't exist in the operation map, but it's in your CDN, it likely hasn't been parsed correctly.

There are a few configuration items you can set.

```
  "Serializer": {
    "cdnUrl": "https://localhost:7042/"
  },
  "Authorization": "password",
  "AvailableSymxchangeVersions": [
    "crud"
  ],
  "Jwt": {
    "Authority": "",
    "Issuer": "",
    "Audience": "",
    "Key": ""
  },
  "PreloadedServices": []
```

Required ✅ The `cdnUrl` is the base URL for your CDN.

`Authorization` is the type of authorization you'll be using (deprecated)

`PreloadedServices` defines the services you'd like to automatically load into memory.

Once the API is running, you can attempt a symxchange call via the /api/v1/symxchange endpoint via a `POST` request.

All calls are wrapped in a result pattern, making it easy to dig into data, errors and any other information.

```
{
  "success": true,
  "error": null,
  "data": {
    "response": {
      "checkNumber": null,
      "checkAccountCode": null,
      "transactionFees": [],
      "transactionFeesSpecified": false,
      "overdrawInformation": {
        "overdrawProtectionEntry": [],
        "overdrawProtectionEntrySpecified": false,
        "overdrawToleranceAmount": 0,
        "version1": {},
        "any": [],
        "anySpecified": false
      },
      "version1": {},
      "any": [],
      "anySpecified": false,
      "confirmation": null,
      "sequenceFrom": null,
      "sequenceTo": null,
      "transactionPostDate": null,
      "statusMessage": "There are not sufficient funds to complete this transaction",
      "messageId": "?",
      "statusCode": 13033
    }
  }
}
```

Symxchange errors will present a `{success: false}` in this pattern, even though the request itself was successful. The full error message will be present in the `hint` section of the error, while the error message itself is present in the `messages` section.