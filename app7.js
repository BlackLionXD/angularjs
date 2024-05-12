

angular.module('app7',[])

.controller('myController',['$scope','$http',function($scope,$http){
    $scope.display = ()=>{
        $http.get('http://localhost:3000/user').then((response)=>{
            $scope.value = response.data;
            console.log('data:',response.data)
        }).catch((error)=>{
            console.error('Error :', error)
        })
    }
}])