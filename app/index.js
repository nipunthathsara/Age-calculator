bod.controller("indexController",function($scope){
    $scope.dob='';
    
    $scope.age=function(){
        
        var date = $scope.dob;
        var today = new Date();
        var bday = new Date(date);
        var age = today.getFullYear() - bday.getFullYear();
        var m = today.getMonth() - bday.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < bday.getDate())) {
        age--;
        }
        return age;
    };
});