/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TempApi);
  }
}(this, function(expect, TempApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TempApi.ProdApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ProdApi', function() {
    describe('createprod', function() {
      it('should call createprod successfully', function(done) {
        //uncomment below and update the code to test createprod
        //instance.createprod(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteprod', function() {
      it('should call deleteprod successfully', function(done) {
        //uncomment below and update the code to test deleteprod
        //instance.deleteprod(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllprod', function() {
      it('should call getAllprod successfully', function(done) {
        //uncomment below and update the code to test getAllprod
        //instance.getAllprod(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getprod', function() {
      it('should call getprod successfully', function(done) {
        //uncomment below and update the code to test getprod
        //instance.getprod(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateprod', function() {
      it('should call updateprod successfully', function(done) {
        //uncomment below and update the code to test updateprod
        //instance.updateprod(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
