

angular.module('app4',[])

.controller('parentController', ['$scope',function(scope){
    scope.parentName = 'Snow'
}])
.controller('childController',['$scope',function(scope){
    scope.childName= 'Jhon'
}])