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
import {ApiClient} from '../ApiClient';

/**
 * Enum class V2RegionType.
 * @enum {String}
 * @readonly
 */
const V2RegionType = {
  /**
   * value: "State"
   * @const
   */
  state: "State",

  /**
   * value: "District"
   * @const
   */
  district: "District",

  /**
   * value: "Community"
   * @const
   */
  community: "Community",

  /**
   * value: "Null"
   * @const
   */
  _null: "Null",

  /**
   * Returns a <code>V2RegionType</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/V2RegionType} The enum <code>V2RegionType</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {V2RegionType};