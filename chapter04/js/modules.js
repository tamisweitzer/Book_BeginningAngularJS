var modules = angular.module('modules', []);

modules.controller('ModulesController', function($scope) {
    var someData = {
        firstName: 'JENNA',
        surname: 'GRANT',
        dateJointed: new Date(2010, 2, 23),
        consumption: 123.659855,
        plan: 'super-basic-plan'
    };

    $scope.data = someData;


});

modules.filter('stripDashes', function() {
    return function(txt) {
        return txt.split('-').join(' ');  
    }
});

modules.filter('toTitleCase', function() {
    return function(str) {
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        })
    }
})


