angular.module('app11',[])

.controller('myController',['$scope',function($scope){
            $scope.message= 'This is my message';
}])

.directive('myInfoDirective',function(){
    return {
        templateUrl: 'template1.html',
        
    }
})