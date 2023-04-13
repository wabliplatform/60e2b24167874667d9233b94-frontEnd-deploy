# TempApi.ProdApi

All URIs are relative to *http://83.212.100.226:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createprod**](ProdApi.md#createprod) | **POST** /prod | Creates the data
[**deleteprod**](ProdApi.md#deleteprod) | **DELETE** /prod/{prodId} | Delete the element
[**getAllprod**](ProdApi.md#getAllprod) | **GET** /prod/getAll | Get all the data
[**getprod**](ProdApi.md#getprod) | **GET** /prod/{prodId} | Get the element
[**updateprod**](ProdApi.md#updateprod) | **PUT** /prod/{prodId} | Updates the element



## createprod

> Prod createprod(prod)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ProdApi();
let prod = new TempApi.Prod(); // Prod | data to be created
apiInstance.createprod(prod, (error, data, response) => {
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
 **prod** | [**Prod**](Prod.md)| data to be created | 

### Return type

[**Prod**](Prod.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteprod

> deleteprod(prodId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ProdApi();
let prodId = "prodId_example"; // String | the Id parameter
apiInstance.deleteprod(prodId, (error, data, response) => {
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
 **prodId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllprod

> [Prod] getAllprod()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ProdApi();
apiInstance.getAllprod((error, data, response) => {
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

[**[Prod]**](Prod.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getprod

> Prod getprod(prodId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ProdApi();
let prodId = "prodId_example"; // String | the Id parameter
apiInstance.getprod(prodId, (error, data, response) => {
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
 **prodId** | **String**| the Id parameter | 

### Return type

[**Prod**](Prod.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateprod

> Prod updateprod(prodId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ProdApi();
let prodId = "prodId_example"; // String | the Id parameter
let opts = {
  'prod': new TempApi.Prod() // Prod | data to be updated
};
apiInstance.updateprod(prodId, opts, (error, data, response) => {
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
 **prodId** | **String**| the Id parameter | 
 **prod** | [**Prod**](Prod.md)| data to be updated | [optional] 

### Return type

[**Prod**](Prod.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

