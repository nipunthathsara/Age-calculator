bod.controller("indexController",function($scope){
    
    $scope.test='';
    $scope.dob=null;
    
    $scope.age=function(){
        var year = $scope.dob;
        return year;
    };
    
    $scope.testing=function(){
    
        //return $scope.test.substring(2,5);
    };
});