
// create the module
angular.module('myAppModule', []);

// configure the module with a controller
angular.module('myAppModule').controller('myProductDetailCtrl', function($scope) {
  // hide colors by default
  $scope.isHidden = true;

  $scope.correctAnswer = false;

  // a function, placed into the scope, which
  // can toggle the value of the isHidden variable
  $scope.showHideColors = function() {
    $scope.isHidden = !$scope.isHidden;
  }
});
