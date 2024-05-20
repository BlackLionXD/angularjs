angular.module('app13', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/sum/:a/:b', {
        templateUrl: 'templates/sumurl.html',
        controller: 'sumUrlController'
    });
}])
.controller('mainController', ['$scope', '$interpolate', '$location', function($scope, $interpolate, $location) {
    $scope.a = 0;
    $scope.b = 0;
    $scope.doSum = function() {
        var url = $interpolate('/sum/{{a}}/{{b}}')($scope);
        console.log(url);
        $location.path(url);
    };
}])
.controller('sumUrlController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.a = parseInt($routeParams.a, 10);
    $scope.b = parseInt($routeParams.b, 10);
    $scope.sum = $scope.a + $scope.b;
}]);
