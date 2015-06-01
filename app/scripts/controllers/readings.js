'use strict';

/**
 * @ngdoc function
 * @name wwwApp.controller:ReadingsCtrl
 * @description
 * # ReadingsCtrl
 * Controller of the wwwApp
 */
angular.module('wwwApp')
  .controller('ReadingsCtrl', function ($scope, $http) {
    console.log('Readings controller');

    $http.get('http://ec2-52-25-131-153.us-west-2.compute.amazonaws.com/retrieve').
    	success(function(data, status, headers, config) {
    		console.log('Success!');
            $scope.readings = data;
    	}).
    	error(function(data, status, headers, config) {
    		console.log('Error occurred');
    	});
  });
