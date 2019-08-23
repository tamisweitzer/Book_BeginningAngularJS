var customDirective = angular.module('customDirective', []);

customDirective.controller('CustomDirectiveCtrl', function($scope) {

    $scope.colorsArray= ['red', 'green', 'blue', 'purple', 'gray', 'olive'];
});

customDirective.directive('colorList', function($compile) {
    return {
        restrict: 'AE',
        template: 
          "<button ng-click='showHideColors()' type='button' class='showHideBtn'>"
        + "{{ isHidden ? 'Show Available Colors' : 'Hide Available Colors' }}"
        + "</button>"
        + "<div ng-hide='isHidden' id='colorContainer'></div>",
        link: function($scope, $element) {
            $scope.isHidden = true;
            $scope.showHideColors = function() {
                $scope.isHidden = !$scope.isHidden;
            }
            var colorContainer = $element.find('div');
            angular.forEach($scope.colorsArray, function(color) {
                var appendString = "<div style='background-color:" + color + "'>" + color + "</div>";
                colorContainer.append(appendString);
            });
        }
    }
});