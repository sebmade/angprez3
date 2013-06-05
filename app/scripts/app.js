'use strict';

angular.module('angprez2App', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:id', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
