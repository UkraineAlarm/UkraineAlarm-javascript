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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.UkraineAlertApi);
  }
}(this, function(expect, UkraineAlertApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('V2RegionType', function() {
      beforeEach(function() {
        instance = UkraineAlertApi.V2RegionType;
      });

      it('should create an instance of V2RegionType', function() {
        // TODO: update the code to test V2RegionType
        expect(instance).to.be.a('object');
      });

      it('should have the property state', function() {
        expect(instance).to.have.property('state');
        expect(instance.state).to.be("State");
      });

      it('should have the property district', function() {
        expect(instance).to.have.property('district');
        expect(instance.district).to.be("District");
      });

      it('should have the property community', function() {
        expect(instance).to.have.property('community');
        expect(instance.community).to.be("Community");
      });

      it('should have the property _null', function() {
        expect(instance).to.have.property('_null');
        expect(instance._null).to.be("Null");
      });

    });
  });

}));