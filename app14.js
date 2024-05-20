var app = angular.module('app14', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/template.html',
            controller: 'homeController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'templates/template.html',
            controller: 'aboutController'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'templates/template.html',
            controller: 'contactController'
        });
}]);

app.controller('homeController', ['$scope', function($scope) {
    $scope.message = 'Welcome to the Home Page';
}]);

app.controller('aboutController', ['$scope', function($scope) {
    $scope.message = 'Learn more about us on this page.';
}]);

app.controller('contactController', ['$scope', function($scope) {
    $scope.message = 'Contact us for more information.';
}]);
