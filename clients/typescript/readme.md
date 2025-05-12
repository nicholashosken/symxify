### Typescript Client

# We now offer cloud hosting for Symxify! Create an unlimited number of connections in the Memberwise Dashboard. To learn more, head to https://memberwise.io/products/symxify

The typescript client is available to use and is fully operational, however there are some known issues that we're working to resolve. Note that they do not have any effect on how the client works.

`npm -i symxify-client`

Create the client

```
export const symxify = createSymxifyClient({
  symxifyUrl: "https://mysymxifyurl.com",
})
```

Use the client in your server or client environment

```
 const client = symxify();
  const resp = await client.request().getAccountSelectFields({
    accountNumber: "99",
    credentials: {
      administrativeCredentials: {
        password: "password",
      },
    },
    selectableFields: {
      includeAllAccountFields: true,
    },
    deviceInformation: {
      deviceNumber: 12345,
      deviceType: "SYMX",
    },
    messageId: "A very cool message",
  });

  console.log(resp) //If successful, the account will be in the data object!
```

##### ⚠️ Known issues

- Typescript complains is any field is left unchecked. This is an unfortunate side-effect of generating typescript types from C# types. This can be worked around by @ts-ignoring the field, or applying your data mutation code in a ts file with a @ts-nocheck.
