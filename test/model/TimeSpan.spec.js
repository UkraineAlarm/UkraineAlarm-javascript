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
    describe('TimeSpan', function() {
      beforeEach(function() {
        instance = new UkraineAlertApi.TimeSpan();
      });

      it('should create an instance of TimeSpan', function() {
        // TODO: update the code to test TimeSpan
        expect(instance).to.be.a(UkraineAlertApi.TimeSpan);
      });

      it('should have the property ticks (base name: "ticks")', function() {
        // TODO: update the code to test the property ticks
        expect(instance).to.have.property('ticks');
        // expect(instance.ticks).to.be(expectedValueLiteral);
      });

      it('should have the property days (base name: "days")', function() {
        // TODO: update the code to test the property days
        expect(instance).to.have.property('days');
        // expect(instance.days).to.be(expectedValueLiteral);
      });

      it('should have the property hours (base name: "hours")', function() {
        // TODO: update the code to test the property hours
        expect(instance).to.have.property('hours');
        // expect(instance.hours).to.be(expectedValueLiteral);
      });

      it('should have the property milliseconds (base name: "milliseconds")', function() {
        // TODO: update the code to test the property milliseconds
        expect(instance).to.have.property('milliseconds');
        // expect(instance.milliseconds).to.be(expectedValueLiteral);
      });

      it('should have the property minutes (base name: "minutes")', function() {
        // TODO: update the code to test the property minutes
        expect(instance).to.have.property('minutes');
        // expect(instance.minutes).to.be(expectedValueLiteral);
      });

      it('should have the property seconds (base name: "seconds")', function() {
        // TODO: update the code to test the property seconds
        expect(instance).to.have.property('seconds');
        // expect(instance.seconds).to.be(expectedValueLiteral);
      });

      it('should have the property totalDays (base name: "totalDays")', function() {
        // TODO: update the code to test the property totalDays
        expect(instance).to.have.property('totalDays');
        // expect(instance.totalDays).to.be(expectedValueLiteral);
      });

      it('should have the property totalHours (base name: "totalHours")', function() {
        // TODO: update the code to test the property totalHours
        expect(instance).to.have.property('totalHours');
        // expect(instance.totalHours).to.be(expectedValueLiteral);
      });

      it('should have the property totalMilliseconds (base name: "totalMilliseconds")', function() {
        // TODO: update the code to test the property totalMilliseconds
        expect(instance).to.have.property('totalMilliseconds');
        // expect(instance.totalMilliseconds).to.be(expectedValueLiteral);
      });

      it('should have the property totalMinutes (base name: "totalMinutes")', function() {
        // TODO: update the code to test the property totalMinutes
        expect(instance).to.have.property('totalMinutes');
        // expect(instance.totalMinutes).to.be(expectedValueLiteral);
      });

      it('should have the property totalSeconds (base name: "totalSeconds")', function() {
        // TODO: update the code to test the property totalSeconds
        expect(instance).to.have.property('totalSeconds');
        // expect(instance.totalSeconds).to.be(expectedValueLiteral);
      });

    });
  });

}));