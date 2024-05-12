angular.module('app2',[])

.controller('parentController', function() {
    this.parentMessage = 'this is from parent message';
})

.controller('childController',function(){
    this.childMessage = 'this is from child message';

})