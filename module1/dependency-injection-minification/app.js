(function () {
'use strict';

var app = angular.module('UrbanYogaApp', []);

app.controller('UrbanYogaController', UrbanYogaController);
UrbanYogaController.$inject = ['$scope', '$filter'];


function UrbanYogaController($scope, $filter) {
  $scope.name = "Pule";

  $scope.upper = function() {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  }
};

})();