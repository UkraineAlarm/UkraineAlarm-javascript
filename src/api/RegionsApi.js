/*
 * Ukraine Alert API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0
 * Contact: support@stfalcon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.52
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {RegionsViewModel} from '../model/RegionsViewModel';

/**
* Regions service.
* @module api/RegionsApi
* @version 3.0
*/
export class RegionsApi {

    /**
    * Constructs a new RegionsApi. 
    * @alias module:api/RegionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the apiV3RegionsGet operation.
     * @callback moduleapi/RegionsApi~apiV3RegionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RegionsViewModel{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Повертає список усіх областей, регіонів та міст
     * @param {module:api/RegionsApi~apiV3RegionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiV3RegionsGet(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RegionsViewModel;

      return this.apiClient.callApi(
        '/api/v3/regions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}