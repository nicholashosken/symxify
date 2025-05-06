### Symxify

Symxify is a lightweight, easy to use platform for interacting with Jack Henry's Symitar SymXchange.

Symxify aims to make it easy for you and your development team to get up and running, building integrations and putting your credit union in the 21st century. Symxify comes with all the bells and whistles you need to have an awesome developer experience, including;

- Official Typescript and C# clients 🧑‍💻
- Self-hostable containers 💾
- An easy and affordable cloud hosted option ☁️ (send us a message at [memberwise.io](https://memberwise.io/contact) for beta access)
- Digestable logs 📜 (coming soon)
- Testable interfaces 🧪 (coming soon)
- Neatly-split projects for maximum flexibility 💪

To run symxify, simply run

```
docker pull memberwise/symxify
```
Then,
```
docker run -d --name symxify -p 7042:80 -e SymxchangeConnection__Port="12345" -e SymxchangeConnection__Host="symtar123.host.net" -e SymxchangeConnection__CertificateContents=(gc ./crt.pem) memberwise/symxify
```
Note that certificate contents cannot be passed into Docker via a .env file, and must be injected in the command line, or applied inside the container's environment variables.

<!--
## Rather have us set up your environment? Visit [https://memberwise.com](https://www.memberwise.com/symxify/sign-up) to create an account and get Symxchanging in under 5 minutes. -->

In the future, you can use Symxify in the cloud via our paid service offering. Contact [Memberwise team](https://memberwise.io/contact)  for more information. Alternatively, you can self host by pulling our Docker container.

Symxify consists of a few different services to ensure high availability and speed.

#### Serializer

---

By default, the serializer will run on the API start, and keep a cached version of the operation map. This operation map does not get refreshed over the life-span of the API. You can refresh the operation map by calling the /api/v1/available-operations/refresh endpoint via a post request with your password defined in your configuration or secrets manager. Note that in the hosted version of Symxify you cannot refresh the operation map. Operations are hosted for you as part of your subscription.

Some operations within Symxchange provide no result, but are still callable (e.g, getParameter, getParameterSelectFields). This is not a bug with Symxify.

#### API

---

The Symxify API has a few endpoints for making symxchange calls as easy as possible.

`/api/v1/symxchange/{version}/{service}/{operation}`

`{Version}` refers to the Symxchange version you'd like to call. Omitting this version will use the persistent endpoints (also known as `CRUD`). The available options for this are;

- crud.

`{Service}` is the symxchange service you'd like to call (e.g., transactions, account, user).

`{Operation}` is the function you'd like to execute against Symxchange (e.g., `getAccountSelectFieldsFilterChildren`, `gltoglpost`, etc)

#### Preloading Symxchange Services

By default, services are not pre-loaded into memory. This means that your memory footprint will be smaller, but "first hits" will have a warm up period. Symxify relies on reflection to find types and serialize/deserialize them into XML and back again. Symxify can maintain it's "lightweight" status by determining these types at runtime, rather than at compile time.

If you want to pre-load a service, add the service namespace into the "PreloadedServices" array in the appsettings.json configuration file.

`"PreloadedServices": ["AccountService", "ParameterService"]`

Note that preloading exceptionally large services (like account and parameter) will increase your baseline memory usage.

To use a PEM certificate, use the `"CertificateContents"` configuration option. If no certificate contents are loaded, then the API will execute requests **INSECURELY**. This is helpful for development, but should **not** be used in a production environment. It is highly recommended to use the certificate in your production environment.

#### Service Verification List

---

All services should work out of the box with Symxify. All services are assumed to be on the persistent endpoints.

Below are the currently supported services.

- AccountService
- AccountsPayableService
- BalancingService
- BatchJobsService
- CashLetterService
- CheckService
- CheckVerificationService
- CollateralService
- ContactEventMgmtService
- CorpTransferService
- CreditReportService
- DealerService
- EcaaService
- ExceptionItemService
- FileManagementService
- FindByService
- FinrepService
- GeneralLedgerService
- MbraddressService
- MemberService
- NonAccountNameService
- ParameterService
- ParticipantService
- PowerOnService
- ProjectionService
- ReceivedItemService
- RemittanceService
- TransactionsService
- UserService
- WireService

If there are any services or operations that do not work, please create a Github issue.

#### CDN

---

By default, the Symxify API hosts its own CDN. You can choose to host the CDN separately

The CDN will provide the WSDLs for each version of symxchange for the operation map, and any other files that may be needed by the various tools and applications that support Symxify.

By default, the CDN will display and allow the read of all files under wwwroot.

#### Clients

---

Symxify comes with two clients, a typescript client (available via NPM) and a C# client (coming soon) (available via Nuget). Both clients require some configuration to run. Feel clone the demo repo to see how these clients function. You may also create a pull request for clients in other languages, like Python or Java.

Ready to get started? Head to the [docs](/docs/readme.md) to learn how to configure Symxify.
