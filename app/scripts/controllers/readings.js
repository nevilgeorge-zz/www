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

    $http.get('http://ec2-52-26-9-182.us-west-2.compute.amazonaws.com/retrieve').
    	success(function(data, status, headers, config) {
    		console.log('Success!');
            console.log(data);
            $scope.readings = []
            for (var i = 0; i < data.length; i++) {
                if (data[i].resolved_title !== '')
                    $scope.readings.push(data[i]);
            }
    	}).
    	error(function(data, status, headers, config) {
    		console.log('Error occurred');
    	});
  });
