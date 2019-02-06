var schema =
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "partyId": {
      "type": "string",
       "minLength": 1,
      "pattern": "^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$"
    },
    "actor": {
      "type": "string",
       "minLength": 0,
         "maxLength": 5
    },
    "email": {
      "type": "string"
    },
    "phone": {
      "type": "string"
    },
    "countryCode": {
      "type": "string"
    },
    "languageCode": {
      "type": "string",
      "enum": ["EN", "DE"]
    },
    "userId": {
      "type": "string",
      "minLength": 0,
      "maxLength": 5
    },
    "amount": {
      "type": "string"
    },
    "percentage": {
      "type": "string"
    },
    "units": {
      "type": "string"
    },
    "currencyCode": {
      "type": "string"
    },
    "tranType": {
      "type": "string"
    },
    "tradeDate": {
      "type": "string"
    },
    "FromAcc": {
      "type": "object",
      "properties": {
        "PortfolioNbr": {
          "type": "string",
           "pattern": "^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$"
        },
        "PortfolioDesignation": {
          "type": "string"
        },
        "fundNbr": {
          "type": "string"
        },
        "subfundcompany": {
          "type": "string"
        },
        "shareClassType": {
          "type": "string"
        },
        "ISINCd": {
          "type": "string"
        }
      },
      "required": [
        "PortfolioNbr",
        "PortfolioDesignation",
        "fundNbr",
        "subfundcompany",
        "shareClassType",
        "ISINCd"
      ]
    },
    "ToAcc": {
      "type": "object",
      "properties": {
        "PortfolioNbr": {
          "type": "string"
        },
        "PortfolioDesignation": {
          "type": "string"
        },
        "fundNbr": {
          "type": "string"
        },
        "subfundcompany": {
          "type": "string"
        },
        "ISINCd": {
          "type": "string"
        },
        "shareClassType": {
          "type": "string"
        }
      },
      "required": [
        "PortfolioNbr",
        "PortfolioDesignation",
        "fundNbr",
        "subfundcompany",
        "ISINCd",
        "shareClassType"
      ]
    }
  },
  "required": [
    "partyId",
    "actor",
    "email",
    "phone",
    "countryCode",
    "languageCode",
    "userId",
    "amount",
    "percentage",
    "units",
    "currencyCode",
    "tranType",
    "tradeDate",
    "FromAcc",
    "ToAcc"
  ]
};