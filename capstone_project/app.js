let app = angular.module('app', [])
app.controller('AppController',['$scope',  function($scope) {
  
  $scope.msg = 'angular working';

  $scope.contentVisible = false;
  $scope.showContent = function() {
    $scope.contentVisible = !$scope.contentVisible;
  }

  
  $scope.caret = false;
  $scope.handleSlideToggle = function(e) {
    $(e.currentTarget).next('div').slideToggle()
  }
  


}]);