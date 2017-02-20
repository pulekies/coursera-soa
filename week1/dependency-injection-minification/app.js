/*
(function () {
'use strict';

var app = angular.module('DIApp', []);

// // option 1
// app.controller('DIController', [ '$scope', '$filter', DIController]);


// option 2
app.controller('DIController', DIController);
DIController.$inject = ['$scope', '$filter'];


function DIController($scope, $filter) {
  $scope.name = "Pule";

  $scope.upper = function() {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  }
};

})();*/

!function(){"use strict";function e(n,o,r){n.name="Pule",n.upper=function(){var e=o("uppercase");n.name=e(n.name)},console.log(r.annotate(e))}var n=angular.module("DIApp",[]);n.controller("DIController",["$scope","$filter","$injector",e])}();
