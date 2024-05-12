
angular.module('app3',[])

.controller('myController', ['$scope',function(scope) {
    scope.message = 'This is an example of using scope object';
}])