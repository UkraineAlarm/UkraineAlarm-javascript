# UkraineAlertApi.WebHookApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV3WebhookDelete**](WebHookApi.md#apiV3WebhookDelete) | **DELETE** /api/v3/webhook | Відписка на WebHook про нові сирени та їх відбій
[**apiV3WebhookPatch**](WebHookApi.md#apiV3WebhookPatch) | **PATCH** /api/v3/webhook | Оновлення WebHook посилання про нові сирени та їх відбій
[**apiV3WebhookPost**](WebHookApi.md#apiV3WebhookPost) | **POST** /api/v3/webhook | Підписка на WebHook про нові сирени та їх відбій. У вебхукі відпрявляється подія тривоги/відбою (приклад в відповіді \&quot;200\&quot;)

<a name="apiV3WebhookDelete"></a>
# **apiV3WebhookDelete**
> apiV3WebhookDelete(opts)

Відписка на WebHook про нові сирени та їх відбій

### Example
```javascript
import {UkraineAlertApi} from 'ukraine_alert_api';
let defaultClient = UkraineAlertApi.ApiClient.instance;

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new UkraineAlertApi.WebHookApi();
let opts = { 
  'body': new UkraineAlertApi.WebHookModel() // WebHookModel | 
};
apiInstance.apiV3WebhookDelete(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WebHookModel**](WebHookModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: Not defined

<a name="apiV3WebhookPatch"></a>
# **apiV3WebhookPatch**
> apiV3WebhookPatch(opts)

Оновлення WebHook посилання про нові сирени та їх відбій

### Example
```javascript
import {UkraineAlertApi} from 'ukraine_alert_api';
let defaultClient = UkraineAlertApi.ApiClient.instance;

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new UkraineAlertApi.WebHookApi();
let opts = { 
  'body': new UkraineAlertApi.WebHookModel() // WebHookModel | 
};
apiInstance.apiV3WebhookPatch(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WebHookModel**](WebHookModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: Not defined

<a name="apiV3WebhookPost"></a>
# **apiV3WebhookPost**
> AlertRegionModel apiV3WebhookPost(opts)

Підписка на WebHook про нові сирени та їх відбій. У вебхукі відпрявляється подія тривоги/відбою (приклад в відповіді \&quot;200\&quot;)

### Example
```javascript
import {UkraineAlertApi} from 'ukraine_alert_api';
let defaultClient = UkraineAlertApi.ApiClient.instance;

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new UkraineAlertApi.WebHookApi();
let opts = { 
  'body': new UkraineAlertApi.WebHookModel() // WebHookModel | 
};
apiInstance.apiV3WebhookPost(opts, (error, data, response) => {
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
 **body** | [**WebHookModel**](WebHookModel.md)|  | [optional] 

### Return type

[**AlertRegionModel**](AlertRegionModel.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

