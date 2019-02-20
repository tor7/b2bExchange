# b2b Exchange
An exchange protocol for connecting Blockchain Australia businesses to exchange coins and fiat.

## Abstract

Some crypto business either have an over supply of coins, such as LROS and Travel By Bit and require fiat.  Or have an over supply of fiat and require coins, like Get Paid In Bitcoin.  

Blockchain Australia proposes a exchange protocol to exchange coins for fiat within the Blockchain Australia ecosystem.  Blockchain Australia will underwrite the transactions.

## Work flow

Blockchain Australias market API holds not order book.  It simply orchestrates the API requests to businesses APIs.  Their API must adhear to the below specification.

1. Buyer looking to fill a BTC order.  
2. A HTTP GET request is made to the the Blockchain Australia API.
3. Blockchain Australia verfies that request has come from a registered Blockchain Australia business.
4. The BA API then calls the 3rd parties API getting their amount on offer and their price.
5. A collection of offers is returned to the buyer.
6. The buyer the submits a HTTP POST to the api with the order details.
7. The BA API then POST to the sellers api with the order details.
8. The seller then releases the coins to the address the BA has on file for the buyer.
9. BA sends cash to the sellers account that is on file.
10.  BA invoices the buyer on 7 day terms.

## Version 1

The first version will be "headless" and purley driven by apis.  The onboarding process will be done manually, as there will only be a handful of business, which are approved by the board.  The businesses will be required to provide:

* Name
* ABN
* Bank Account Details
* IP Address request is made from
* Public Key
* Invoice email address

## API Spec

### Company

GET https://api.blockchainaustralia.org/company?id=2A0E987E-5928-4874-BE69-FC7E9F45FAF9

Response
```
{
  "name": "Get Paid In Bitcoin",
  "id": "2A0E987E-5928-4874-BE69-FC7E9F45FAF9",
  "publicKey": "0x00"
}
```

### Quote

GET https://api.blockchainaustralia.org/quote

```
{
  [
    "name": "Get Paid In Bitcoin",
    "id": "2A0E987E-5928-4874-BE69-FC7E9F45FAF9",
    "expires": "0"
    "coins": [
      "eth": {
        "avalilble": 100.0,
        "rate": "120.0",
        "pair": "aud"
      },
      "btc": {
        "avalilble": 100.0,
        "rate": "120.0",
        "pair": "aud"
      }
    ]
  ]
}
```

GET https://api.blockchainaustralia.org/quote?coin=btc

### Order

POST https://api.blockchainaustralia.org/order
```
{
  order: [
    "timestamp": "UNIX epoch",
    "id": "2A0E987E-5928-4874-BE69-FC7E9F45FAF9",
    "invoice": "Users internal invoice number (optional)",
    "terms": "7 days",
    "coins": [
      "btc": [
        "amount": 0.001,
        "address": "1dugong"
      ]
    ]
  ],
  "signature": "0x00"
}
```

Response
```
{
}
```

id:  Assigned company id
timestamp:  Must be within 1 minute of Blockchain Australias server time

### Signing

1.  Flatten the order JSON object
2.  Peform a SHA3-256 hash
3.  Sign the hash with the private key corrosponding to the users settings
4.  Add the signature to the request object.

Note:  The recievers coin address is also contained within the payload, so the call cannot be spoofed to an attackers address.

### Direct calls
Business could call each others APIs directly, however, the request will not be logged in Blockchain Australias database, and thus cannot be underwritten.  Parties will be required to reconcilate themselves.

### Examples

Client integration examples:
c#
NodeJS
