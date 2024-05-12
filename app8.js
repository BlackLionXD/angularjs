
angular.module('app8',[])
.service('calculatorService',function(){
    this.add = (num1, num2) =>{
        return num1 + num2
    }
    this.subtract = (num1, num2) =>{
        return num1 - num2
    }
    this.multiply = (num1, num2) =>{
        return num1 * num2
    }
    this.divide = (num1, num2) =>{
        if(num2!=0){
            return num1 / num2
        }
        else{
            return "can't divide by 0"

        }
    }
})

.controller('myController',['$scope','calculatorService',function($scope,calculatorService){
    $scope.sum = ()=>{
        $scope.value = calculatorService.add($scope.num1, $scope.num2)
    }
    $scope.difference = ()=>{
        $scope.value = calculatorService.subtract($scope.num1,$scope.num2)
    }
    $scope.product = ()=>{
        $scope.value = calculatorService.multiply($scope.num1,$scope.num2)
    }
    $scope.quotitent = ()=>{
        $scope.value = calculatorService.divide($scope.num1,$scope.num2)
    }
}])