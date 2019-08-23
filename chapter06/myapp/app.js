
var ch06app = angular.module("ch06app", []);

ch06app.controller("Ch06Ctrl", function($scope) {
  var person = {
    firstName:'Jimmy',
    age: 21,
    address: {
      street: '16 Somewhere Dr',
      suburb: 'Port Kennedy',
      state: 'Western Australia'
    }
  }
  $scope.person = person;

  $scope.ShowFullName = function() {
    if (angular.isDefined($scope.firstName)) {
      console.log("FullName is " + $scope.fullName);
    }
    else {
      console.log("Name is empty");
    }
  }

  


});
