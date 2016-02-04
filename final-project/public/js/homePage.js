angular.module('homeApp', [])

angular.module('homeApp')
	.controller('navController', ['$scope', function($scope){
		$scope.links = [{
			"link": "Texts",
			"show": false,
			"text": "Read texts from the English Medeival period in both Middle English and Modern English.\nExplore early anonymous poetry and the classics of Chaucer and Malory.",
			"source": "../html/textsPage.html"

		},
		{
			"link": "Resources",
			"show": false,
			"text": "Readings on Middle English and Middle English Literature.\nA quick flashcard game to help you brush up on your Middle English.",
			"source":"../html/resourcesPage.html"
		},
		{
			"link": "Dictionary",
			"show": false,
			"text": "Middle English to Modern English Dictionary",
			"source":"../html/dictionary.html"
		},
		{
			"link": "Translate",
			"show": false,
			"text": "Translate from Middle English to Modern English",
			"source":"../html/translation.html"
		},
		{
			"link": "Contact",
			"show": false,
			"text": "Contact us with questions, comments, or requests for new modernized texts.",
			"source":"../contact/contact.html"
		}];
		$scope.hoverOn = function(links){
			return links.show = !links.show;
		}

	}])