
angular.module("ch06app", [])
.controller("Ch06Ctrl", function($scope) {

  $scope.ShowFirstName = function() {
    alert("Name is " + $scope.firstName);
  }

  var person = {
    firstName:'Jimmy',
    age: 21,
    address: {
      street: '16 Somewhere Dr',
      suburb: 'Port Kennedy',
      state: 'Western Australia'
    }
  }
  $scope.person = person


});
