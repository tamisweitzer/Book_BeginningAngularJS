
var winApp = angular.module('winApp', []);

winApp.controller('WinCtrl', function($scope, $window, $location, $document) {

  // $window service
  $scope.winWidth = $window.innerWidth;

  // $location service
  $scope.url = $location.absUrl();
  $scope.protocol = $location.protocol();
  $scope.host = $location.host();
  $scope.port = $location.port();

  // $document service
  $scope.docTitle = $document[0].title;
})
