# UkraineAlertApi.RegionsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV3RegionsGet**](RegionsApi.md#apiV3RegionsGet) | **GET** /api/v3/regions | Повертає список усіх областей, регіонів та міст

<a name="apiV3RegionsGet"></a>
# **apiV3RegionsGet**
> RegionsViewModel apiV3RegionsGet()

Повертає список усіх областей, регіонів та міст

### Example
```javascript
import {UkraineAlertApi} from 'ukraine_alert_api';
let defaultClient = UkraineAlertApi.ApiClient.instance;

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new UkraineAlertApi.RegionsApi();
apiInstance.apiV3RegionsGet((error, data, response) => {
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

[**RegionsViewModel**](RegionsViewModel.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

