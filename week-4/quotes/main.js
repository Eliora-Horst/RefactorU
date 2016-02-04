angular.module('quoteApp', []);

angular.module('quoteApp')
	.controller('quoteController', ['$scope', function($scope){
		$scope.quotes = []

		$scope.quote = ""
		$scope.author = ""
		$scope.addQuote = function(){

			$scope.newQuote = {
				quote: $scope.quote,
				author: $scope.author,
			}

			if($scope.quote !=''){
				$scope.quotes.push($scope.newQuote);
				$scope.quote = "";
				$scope.author = "";
			}
		}


	$scope.rmQuote = function($index) {
		$scope.quotes.splice($index, 1);
	}
}]);

