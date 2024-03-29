# UkraineAlarm - Javascript library for the [Ukraine Alert API](https://api.ukrainealarm.com/)

- API version: 3.0
- Package version: 3.0

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var UkraineAlertApi = require('ukraine_alert_api');
var defaultClient = UkraineAlertApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix['Authorization'] = "Token"

var api = new UkraineAlertApi.AlertsApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.apiV3AlertsGet(callback);
```

## Documentation for API Endpoints

All URIs are relative to */*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*UkraineAlertApi.AlertsApi* | [**apiV3AlertsGet**](docs/AlertsApi.md#apiV3AlertsGet) | **GET** /api/v3/alerts | Області, регіони та громади з тривогами
*UkraineAlertApi.AlertsApi* | [**apiV3AlertsRegionHistoryGet**](docs/AlertsApi.md#apiV3AlertsRegionHistoryGet) | **GET** /api/v3/alerts/regionHistory | Отримати останніх 25 тривог регіону
*UkraineAlertApi.AlertsApi* | [**apiV3AlertsRegionIdGet**](docs/AlertsApi.md#apiV3AlertsRegionIdGet) | **GET** /api/v3/alerts/{regionId} | Статус області/регіону/громади
*UkraineAlertApi.AlertsApi* | [**apiV3AlertsStatusGet**](docs/AlertsApi.md#apiV3AlertsStatusGet) | **GET** /api/v3/alerts/status | Перевірка номеру останньої дії. Використовувати для перевірки необхідності оновлювати дані
*UkraineAlertApi.RegionsApi* | [**apiV3RegionsGet**](docs/RegionsApi.md#apiV3RegionsGet) | **GET** /api/v3/regions | Повертає список усіх областей, регіонів та міст
*UkraineAlertApi.WebHookApi* | [**apiV3WebhookDelete**](docs/WebHookApi.md#apiV3WebhookDelete) | **DELETE** /api/v3/webhook | Відписка на WebHook про нові сирени та їх відбій
*UkraineAlertApi.WebHookApi* | [**apiV3WebhookPatch**](docs/WebHookApi.md#apiV3WebhookPatch) | **PATCH** /api/v3/webhook | Оновлення WebHook посилання про нові сирени та їх відбій
*UkraineAlertApi.WebHookApi* | [**apiV3WebhookPost**](docs/WebHookApi.md#apiV3WebhookPost) | **POST** /api/v3/webhook | Підписка на WebHook про нові сирени та їх відбій. У вебхукі відпрявляється подія тривоги/відбою (приклад в відповіді \&quot;200\&quot;)

## Documentation for Models

 - [UkraineAlertApi.Alert](docs/Alert.md)
 - [UkraineAlertApi.AlertModification](docs/AlertModification.md)
 - [UkraineAlertApi.AlertRegionModel](docs/AlertRegionModel.md)
 - [UkraineAlertApi.AlertType](docs/AlertType.md)
 - [UkraineAlertApi.RegionAlarmModel](docs/RegionAlarmModel.md)
 - [UkraineAlertApi.RegionAlarmsHistory](docs/RegionAlarmsHistory.md)
 - [UkraineAlertApi.RegionViewModel](docs/RegionViewModel.md)
 - [UkraineAlertApi.RegionsViewModel](docs/RegionsViewModel.md)
 - [UkraineAlertApi.TimeSpan](docs/TimeSpan.md)
 - [UkraineAlertApi.V2RegionType](docs/V2RegionType.md)
 - [UkraineAlertApi.WebHookModel](docs/WebHookModel.md)

## Documentation for Authorization


### Token

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

