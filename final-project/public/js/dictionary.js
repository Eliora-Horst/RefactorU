angular.module('dictionaryApp', [])

angular.module('dictionaryApp')
	.controller('dictionaryController', ['$scope', '$sce', '$http', function($scope, $sce, $http){
		$scope.submitQuery = function(){
			$http({
				method : 'POST',
				url    : '/searchDictionary',
				data   : {queryEntry: $scope.queryEntry}
			}).then(function(returnData){
				$scope.translate = returnData.data;
				console.log(returnData)
			}, function(error){
				console.log(error)
			})	
		}
		$scope.$sce = $sce;
	}])