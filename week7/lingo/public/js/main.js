angular.module('lingoApp', []);

angular.module('lingoApp')
	.controller('lingoController', ['$scope','$http', function($scope, $http){
	$scope.translate = function(){
		$http.get('/submitWord', $scope.translate)
	    	.then(function(returnData) {
	       		$scope.translatedWord = returnData.data
	    })
	}
}])