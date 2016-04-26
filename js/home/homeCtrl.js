var app=angular.module('bailey');
    
app.controller('homeCtrl', function($scope){
    $scope.test = "This is the home page."; 
    $scope.date = new Date();
});