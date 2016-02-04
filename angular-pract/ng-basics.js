angular.module('myApp', [])


var mainControllerFunc = function($scope){
    $scope.msg = console.log("I hear them singing, each to each...");
    
}
angular.module('myApp').controller('mainController', ['$scope', mainControllerFunc])