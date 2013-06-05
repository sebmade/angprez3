'use strict';

angular.module('angprez2App')
  .controller('MainCtrl', function ($scope, $document, $http, $routeParams) {
    $scope.slideIndex = +$routeParams.id;

    $http.get("/data/slides.json").success(function(data) {
      $scope.slides = data;
    }).error(function(data) {

    });

    $scope.nextSlide = function() {
      $scope.slideIndex++;
    };

    $scope.previousSlide = function() {
      $scope.slideIndex--;
    };

    $scope.currentSlide = function() {
      return $scope.slides[$scope.slideIndex].content;
    };

    $document.keydown(function(event) {
      if (event.keyCode == 37) {
        $scope.$apply(function() {
          $scope.previousSlide();
        });
      } else if (event.keyCode == 39) {
        $scope.$apply(function() {
          $scope.nextSlide();
        });
      }
    });


  });
