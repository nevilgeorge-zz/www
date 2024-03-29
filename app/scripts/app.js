'use strict';

/**
 * @ngdoc overview
 * @name wwwApp
 * @description
 * # wwwApp
 *
 * Main module of the application.
 */
angular
  .module('wwwApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/experience', {
        templateUrl: 'views/experience.html',
        controller: 'ExperienceCtrl'
      })
      .when('/readings', {
        templateUrl: 'views/readings.html',
        controller: 'ReadingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
