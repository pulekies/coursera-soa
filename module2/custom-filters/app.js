(function () {
  'use strict';

  var app = angular.module('MsgApp', []);
  app.controller('MsgController', MsgController);
  app.filter('asterisk', AsteriskFilterFactory);
  app.filter('american', AmericanFilterFactory);
  app.filter('custom', CustomFilterFactory);

  MsgController.$inject = ['$scope', 'asteriskFilter', 'americanFilter', 'customFilter'];
  function MsgController($scope, asteriskFilter, americanFilter, customFilter) {
    $scope.name = "Pule";
    $scope.crackerCost = "0.35";
    $scope.imageHeight=100;
    var message = "Gromit, have you been peckish during the night?";

    $scope.sayMessage = function() {
      return message;
    }

    $scope.sayAsteriskMessage = function() {
      var output = asteriskFilter(message);
      return output;
    }

    $scope.sayAmericanMessage = function() {
      var output = americanFilter(message);
      return output;
    }

    $scope.sayCustomMessage = function(suffix) {
      var output = customFilter(message, suffix);
      return output;
    }

    $scope.increaseImageHeight = function () {
      $scope.imageHeight += 10;
    };

  };

  function CustomFilterFactory() {
    return function(input, suffix) {
      var changedInput = input + " " + suffix;
      return changedInput;
    }
  };
  
  function AsteriskFilterFactory() {
    return function(input) {
      var changedInput = "**" + input + "**";
      return changedInput;
    }
  };

  function AmericanFilterFactory() {
      return function(input) {
        input = input || "";
        input = input.replace("peckish", "hungry");
        return input;
    };
  }

})();
