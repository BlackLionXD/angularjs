
angular.module('app10',[])

.controller('myController',['$scope',function($scope){
    $scope.searchText = '' ;
    $scope.names = ['banchi','hunda','sem','masre','geme','andu'];
    $scope.price1 = 123.45;
    $scope.price2 = 123.45;
    $scope.value2='oPkKhH';
    $scope.currentDate = new Date();
}])