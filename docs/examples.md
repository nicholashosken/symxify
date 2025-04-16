`post` `http://{my symx url}/api/v1/symxchange/transactions/withdraw`

`body`

```
{
  "credentials": {
    "administrativeCredentials": {
      "password": "password"
    }
  },
  "withdrawalAmounts": {
    "totalAmount": 5.0
  }
}
```