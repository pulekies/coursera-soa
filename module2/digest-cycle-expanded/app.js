(function () {
  'use strict';

  var app = angular.module('CounterApp', []);
  app.controller('CounterController', CounterController);

  CounterController.$inject = ['$scope', '$timeout'];
  function CounterController($scope, $timeout) {
    $scope.counter = 0;
    $scope.name = "";

    // method 1
    /*
    $scope.upCounter = function() {
      setTimeout(function() {
        $scope.counter++;
        console.log("Counter incremented");
        $scope.$digest();
      }, 2000);
    }
    */

    // method 2
    /*
    $scope.upCounter = function() {
      setTimeout(function() {
        $scope.$apply(function() {
          $scope.counter++;
          console.log("Counter incremented");
        });
      }, 2000);
    }
    */

    $scope.upCounter = function() {
      $timeout(function() {
        $scope.counter++;
        console.log("Counter incremented");
      }, 2000);
    }

  };

})();
