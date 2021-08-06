var myModule = angular.module("newModule" , []);

myModule.controller("myController" , function($scope){
    $scope.name = "Flynava Technologies";
    $scope.city = "Bangalore";

    $scope.details = function(){
        return "name  is " + $scope.name + " location " + $scope.city;
    }
});


myModule.run(function($rootScope){
    $rootScope.name="hello rootScope"; 
});