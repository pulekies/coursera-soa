(function () {
'use strict';

var app = angular.module('MsgApp', []);

app.controller('MsgController', MsgController);
MsgController.$inject = ['$scope'];


function MsgController($scope) {
  $scope.name = "Pule";

  $scope.imageHeight=100;
  $scope.increaseImageHeight = function () {
    $scope.imageHeight += 10;
  };

};

})();
