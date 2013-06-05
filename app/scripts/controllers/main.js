'use strict';

angular.module('angprez2App')
  .controller('MainCtrl', function ($scope) {
    $scope.slideIndex = 0;

    $scope.nextSlide = function() {
      $scope.slideIndex++;
    };

    $scope.previousSlide = function() {
      $scope.slideIndex--;
    };

    $scope.currentSlide = function() {
      return "slide"+$scope.slideIndex+".html";
    };

  });
