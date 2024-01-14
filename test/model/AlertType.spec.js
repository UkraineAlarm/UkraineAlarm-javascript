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
    describe('AlertType', function() {
      beforeEach(function() {
        instance = UkraineAlertApi.AlertType;
      });

      it('should create an instance of AlertType', function() {
        // TODO: update the code to test AlertType
        expect(instance).to.be.a('object');
      });

      it('should have the property UNKNOWN', function() {
        expect(instance).to.have.property('UNKNOWN');
        expect(instance.UNKNOWN).to.be("UNKNOWN");
      });

      it('should have the property AIR', function() {
        expect(instance).to.have.property('AIR');
        expect(instance.AIR).to.be("AIR");
      });

      it('should have the property ARTILLERY', function() {
        expect(instance).to.have.property('ARTILLERY');
        expect(instance.ARTILLERY).to.be("ARTILLERY");
      });

      it('should have the property URBAN_FIGHTS', function() {
        expect(instance).to.have.property('URBAN_FIGHTS');
        expect(instance.URBAN_FIGHTS).to.be("URBAN_FIGHTS");
      });

      it('should have the property CHEMICAL', function() {
        expect(instance).to.have.property('CHEMICAL');
        expect(instance.CHEMICAL).to.be("CHEMICAL");
      });

      it('should have the property NUCLEAR', function() {
        expect(instance).to.have.property('NUCLEAR');
        expect(instance.NUCLEAR).to.be("NUCLEAR");
      });

      it('should have the property INFO', function() {
        expect(instance).to.have.property('INFO');
        expect(instance.INFO).to.be("INFO");
      });

    });
  });

}));