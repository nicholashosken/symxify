### Typescript Client

The typescript client is available to use and is fully operational, however there are some known issues that we're working to resolve. Note that they do not have any effect on how the client works.

`npm -i symxify-client`

##### Known issues
- Typescript complains is any field is left unchecked. This is an unfortunate side-effect of generating typescript types from C# types.
- The value and specified fields are present in the typescript objects.

We are working to resolve these, but they are not a high priority as it's not anything breaking. It should be noted that removing the value and specified elements would likely decrease the size of the package by 66%.

### C# Client

The C# client is a WIP. The goal is for this client to be usable on the server and client (e.g., Blazor SSR/Razor Page and Blazor CSR).