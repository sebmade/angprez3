'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angprez2App'));

  var MainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();

    $httpBackend.when("GET", "/data/slides.json").respond([{title: "test", content: "slide0.html"}]);

    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });

    $httpBackend.flush();

  }));

  it('should increment slide index', function() {
    scope.slideIndex = 0;
    scope.nextSlide();
    expect(scope.slideIndex).toBe(1);
  });

  it('should decrement slide index', function() {
    scope.slideIndex = 1;
    scope.previousSlide();
    expect(scope.slideIndex).toBe(0);
  });

});
