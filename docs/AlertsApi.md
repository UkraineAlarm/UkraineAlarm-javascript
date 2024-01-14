# UkraineAlertApi.AlertsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV3AlertsGet**](AlertsApi.md#apiV3AlertsGet) | **GET** /api/v3/alerts | Області, регіони та громади з тривогами
[**apiV3AlertsRegionHistoryGet**](AlertsApi.md#apiV3AlertsRegionHistoryGet) | **GET** /api/v3/alerts/regionHistory | Отримати останніх 25 тривог регіону
[**apiV3AlertsRegionIdGet**](AlertsApi.md#apiV3AlertsRegionIdGet) | **GET** /api/v3/alerts/{regionId} | Статус області/регіону/громади
[**apiV3AlertsStatusGet**](AlertsApi.md#apiV3AlertsStatusGet) | **GET** /api/v3/alerts/status | Перевірка номеру останньої дії. Використовувати для перевірки необхідності оновлювати дані

<a name="apiV3AlertsGet"></a>
# **apiV3AlertsGet**
> [AlertRegionModel] apiV3AlertsGet()

Області, регіони та громади з тривогами

### Example
```javascript
import {UkraineAlertApi} from 'ukraine_alert_api';
let defaultClient = UkraineAlertApi.ApiClient.instance;

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new UkraineAlertApi.AlertsApi();
apiInstance.apiV3AlertsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[AlertRegionModel]**](AlertRegionModel.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV3AlertsRegionHistoryGet"></a>
# **apiV3AlertsRegionHistoryGet**
> [RegionAlarmsHistory] apiV3AlertsRegionHistoryGet(opts)

Отримати останніх 25 тривог регіону

### Example
```javascript
import {UkraineAlertApi} from 'ukraine_alert_api';
let defaultClient = UkraineAlertApi.ApiClient.instance;

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new UkraineAlertApi.AlertsApi();
let opts = { 
  'regionId': "regionId_example" // String | 
};
apiInstance.apiV3AlertsRegionHistoryGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **regionId** | **String**|  | [optional] 

### Return type

[**[RegionAlarmsHistory]**](RegionAlarmsHistory.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV3AlertsRegionIdGet"></a>
# **apiV3AlertsRegionIdGet**
> [AlertRegionModel] apiV3AlertsRegionIdGet(regionId)

Статус області/регіону/громади

### Example
```javascript
import {UkraineAlertApi} from 'ukraine_alert_api';
let defaultClient = UkraineAlertApi.ApiClient.instance;

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new UkraineAlertApi.AlertsApi();
let regionId = "regionId_example"; // String | ID області/регіону/громади

apiInstance.apiV3AlertsRegionIdGet(regionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **regionId** | **String**| ID області/регіону/громади | 

### Return type

[**[AlertRegionModel]**](AlertRegionModel.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV3AlertsStatusGet"></a>
# **apiV3AlertsStatusGet**
> AlertModification apiV3AlertsStatusGet()

Перевірка номеру останньої дії. Використовувати для перевірки необхідності оновлювати дані

### Example
```javascript
import {UkraineAlertApi} from 'ukraine_alert_api';
let defaultClient = UkraineAlertApi.ApiClient.instance;

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new UkraineAlertApi.AlertsApi();
apiInstance.apiV3AlertsStatusGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AlertModification**](AlertModification.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

