// 	function showCoords(event){
// 	var latitude = event.clientX;
// 	var longitude = event.clientY;
// 	var coords = "X is: "+latitude+" , Y is "+longitude;
// 	document.getElementById("demo").innerHTML=coords;
// }

angular.module('goldMarkerApp', []);
angular.module('goldMarkerApp')
	.controller("mainMarker", ['$scope', function($scope){

		$scope.markers = []
		// $scope.color = "blue";

		$scope.mapClick = function(event){
			$scope.latitude = event.clientX-17.5;
			$scope.longitude = event.clientY-17.5;
			console.log($scope.latitude,$scope.longitude)
			$scope.coord = {
				lat: $scope.latitude,
				lng: $scope.longitude
			}
			console.log($scope.coord)
			// var a = [latitude,longitude]
			// console.log(a)
			$scope.markers.push($scope.coord)
			
			// return coord;
			console.log($scope.markers)
		}

			$scope.hideBar = function(index){
				$scope.markers[index].value=true
			}
		// var output = mapClick($scope)
		// markers.push(mapClick($scope))
		// console.log(markers)
	}])

// angular.module('goldMarkerApp').controller('mainMarker', ['$scope', 'markerFunc'])