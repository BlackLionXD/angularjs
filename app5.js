

angular.module('app5',[])

.controller('myController',['$scope',function(scope){
        scope.num = 1
        scope.addTen = () =>{
            scope.num += 10;
        }
}])