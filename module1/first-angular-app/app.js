(function () {
'use strict';

var app = angular.module('AngularSOA', []);
app.controller('AngularSOAController', function($scope) {
  $scope.name = "Pule";
  $scope.sayHello = function() {
    return "Hello " + $scope.name;
  };
});

})();
