(function () {
  'use strict';

  var app = angular.module('CounterApp', []);
  app.controller('CounterController', CounterController);

  CounterController.$inject = ['$scope'];
  function CounterController($scope) {
    $scope.onceCounter = 0;
    $scope.counter = 0;
    $scope.name = "";
    $scope.showNumberOfWatchers = function() {
      console.log("Num watchers: " + $scope.$$watchersCount);
    }

    $scope.countOnce = function() {
      $scope.onceCounter = 1;
    }

    $scope.upCounter = function() {
      $scope.counter++;
    }

    $scope.$watch(function () {
      console.log("Digest loop fired");
    });

    /*
    $scope.$watch('onceCounter', function (newValue, oldValue) {
      console.log("Once-counter (old): " + oldValue);
      console.log("Once-counter (new): " + newValue);
    });

    $scope.$watch('counter', function (newValue, oldValue) {
      console.log("Counter (old): " + oldValue);
      console.log("Counter (new): " + newValue);
    });
    */

  };

})();
