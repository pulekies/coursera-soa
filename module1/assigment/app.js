(function () {
'use strict';

var app = angular.module('LunchCheck', []);

var LunchMessages = {
  NoData: "Please enter data first!",
  Enjoy: "Enjoy!",
  TooMuch: "Too much!"
}

app.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope', '$filter'];


function LunchCheckController($scope, $filter) {
  $scope.lunchDescription = "";
  $scope.lunchMessage = LunchMessages.NoData;
  $scope.validLunchDescription = true;
  $scope.showLunchMessage = false;

  $scope.checkLunchList = function() {
      $scope.showLunchMessage = true;
      var lunchListCount = getItemCount($scope.lunchDescription);
      if(lunchListCount === 0) {
        $scope.lunchMessage = LunchMessages.NoData;
        $scope.validLunchDescription = false;
      } else {
          if(lunchListCount <= 3) {
          $scope.lunchMessage = LunchMessages.Enjoy;
        } else {
          $scope.lunchMessage = LunchMessages.TooMuch;
        }

        $scope.validLunchDescription = true;
      }
    }
};

function getItemCount(listAsString) {
  var itemCount = 0;
  if(listAsString) {
    var lunchList = listAsString.split(',');
    for(var i = 0; i < lunchList.length; i++) {
      if(lunchList[i].trim()) {
        itemCount++;
      }
    }
  }

  return itemCount;
}

})();
