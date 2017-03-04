(function () {
  'use strict';

  var app = angular.module('MsgApp', []);

  app.controller('MsgController', MsgController);
  MsgController.$inject = ['$scope', '$filter'];


  function MsgController($scope, $filter) {
    $scope.name = "Pule";
    $scope.crackerCost = "0.35";

    $scope.imageHeight=100;

    $scope.sayMessage = function() {
      var msg = "Gromit, have you been peckish during the night?";
      var output = $filter('uppercase')(msg);
      return output;
    }

    $scope.increaseImageHeight = function () {
      $scope.imageHeight += 10;
    };

  };

})();
