

angular.module('taskApp',[])

.controller('TaskController',['$scope',($scope)=>{
    $scope.tasks = [{name:'study', status: '70%'}, {name:'work', status: '70%'}, {name:'take shower', status: '50%'}, {name:'pray salah', status: '80%'},{name:'eat', status: '40%'}];
    $scope.addTask = ()=>{
        $scope.tasks.push({name:$scope.newTaskName,status:$scope.newTaskStatus})
    }
}])