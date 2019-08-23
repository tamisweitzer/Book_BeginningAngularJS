var serviceApp = angular.module('serviceApp', []);

serviceApp.factory('dateTimeService', function() {
  var datetimeSvc = {};
  datetimeSvc.getDate = function() {
    return new Date().toDateString();
  }

  datetimeSvc.getTime = function() {
    return new Date().toTimeString();
  }

  return datetimeSvc;
});

serviceApp.controller('ServiceCtrl', function($scope, dateTimeService) {
  $scope.theDate = dateTimeService.getDate();
  $scope.theTime = dateTimeService.getTime();

  $scope.message = "service";
});
