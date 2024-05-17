


angular.module('app12',['ngRoute'])

.config(function($routeProvider){
    $routeProvider
    .when('/about',{
        templateUrl: 'templates/about.html'
    })
    .when('/contact',{
        templateUrl: 'templates/contact.html'
    })
})