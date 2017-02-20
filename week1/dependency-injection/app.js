(function () {
'use strict';

var app = angular.module('DIApp', []);
app.controller('DIController', DIController);

function DIController($scope, $filter, $injector) {
  $scope.name = "";

  $scope.upper = function() {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  }

  console.log($injector.annotate(DIController));
};

})();
