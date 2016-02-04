console.log("*************\nProblem Set 6\n*************")
console.log("Second Lowest and Second Highest Numbers: [7, 1, 7, 12, 98, 106]")

function sortLowtoHigh(a,b){
	return a-b;
}
function sortHightoLow(a,b){
	return b-a;
}

function secondLowest(array){
	var secondSmallest = 0;
	var lowToHigh = array.sort(sortLowtoHigh);
	for(var i = 0; i < lowToHigh.length; i++){
		for(var j = 0; j < lowToHigh.length; j++){
			if(lowToHigh[j]!=lowToHigh[i]){
				return secondSmallest = lowToHigh[j]
			}
		}
	}
}

function secondHighest(array){
	var secondBiggest = 0;
	var highToLow = array.sort(sortHightoLow);

	for(var i = 0; i<highToLow.length; i++){
		for(var j = 0; j<highToLow.length; j++){

			if(highToLow[j]!=highToLow[i]){
				return secondBiggest = highToLow[j]
			}
		}
	}
}

function secondGreatLow(array){
	return secondLowest(array)+" "+secondHighest(array)
}
console.log("Second Lowest and Second Highest Numbers: " + secondGreatLow([7, 1, 7, 12, 98, 106]))

console.log("*************\nTime Coversion (129)")
function timeConvert(num){
	var hours = Math.floor(num/60)
	var minutes = num%60

	if(minutes === 0){
		return(hours+":00")
	}
	else{
		return(hours+":0"+minutes)
	}
}
console.log("Time: "+timeConvert(129))

console.log("*************")
function bracketMatcher(str){
	var leftCounter = 0
	var rightCounter = 0

	for(var i=0; i<str.length; i++){
		if(str[i]==="("){
			leftCounter++
		}
		else if(str[i]===")"){
			rightCounter++
		}
	}
	if(leftCounter===rightCounter){
		return true;
	}
	else{
		return false;
	}
}
console.log("Bracket Matcher (hello(world)): "+bracketMatcher("(hello(world))"))
console.log("Bracket Matcher (hello(world))): "+bracketMatcher("(hello(world)))"))