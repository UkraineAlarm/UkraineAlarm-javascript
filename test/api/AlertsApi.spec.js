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

  beforeEach(function() {
    instance = new UkraineAlertApi.AlertsApi();
  });

  describe('(package)', function() {
    describe('AlertsApi', function() {
      describe('apiV3AlertsGet', function() {
        it('should call apiV3AlertsGet successfully', function(done) {
          // TODO: uncomment apiV3AlertsGet call and complete the assertions
          /*

          instance.apiV3AlertsGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(UkraineAlertApi.AlertRegionModel);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV3AlertsRegionHistoryGet', function() {
        it('should call apiV3AlertsRegionHistoryGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV3AlertsRegionHistoryGet call and complete the assertions
          /*
          var opts = {};

          instance.apiV3AlertsRegionHistoryGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(UkraineAlertApi.RegionAlarmsHistory);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV3AlertsRegionIdGet', function() {
        it('should call apiV3AlertsRegionIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV3AlertsRegionIdGet call and complete the assertions
          /*

          instance.apiV3AlertsRegionIdGet(regionId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(UkraineAlertApi.AlertRegionModel);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV3AlertsStatusGet', function() {
        it('should call apiV3AlertsStatusGet successfully', function(done) {
          // TODO: uncomment apiV3AlertsStatusGet call and complete the assertions
          /*

          instance.apiV3AlertsStatusGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UkraineAlertApi.AlertModification);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));