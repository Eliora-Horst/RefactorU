angular.module('dictionaryApp', [])

angular.module('dictionaryApp')
	.controller('dictionaryController', ['$scope', '$http', function($scope, $http){
		$scope.submitTranslation = function(){
			$http({
				method : 'POST',
				url    : '/translation',
				data   : {queryEntry: $scope.queryEntry}
			}).then(function(returnData){
				$scope.translate = returnData.data;
				console.log(returnData)
			}, function(error){
				console.log(error)
			})	
		}
	}])