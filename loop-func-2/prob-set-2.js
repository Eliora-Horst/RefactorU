
console.log("***** firstReverse ***** (desrever)")
function firstReverse(str){
	var reverseStr = ''
	for (var i = str.length - 1; i>=0 ; i--){
		reverseStr += str[i]
	}
	return reverseStr
}
console.log(firstReverse("desrever"))

console.log("\n***** swapCase ***** (SWAPcASE)")
function swapCase(str){
	var swapped =''
	for(var i = 0; i<str.length; i++){
		var letter = str[i]
		if (str[i]===(letter.toUpperCase())){
			var lowerCase = str[i]
			swapped += (lowerCase.toLowerCase())
		}
		if (str[i]===(letter.toLowerCase())){
			var upperCase = str[i]
			swapped += (upperCase.toUpperCase())
		}
	}
	return swapped
}
console.log(swapCase("SWAPcASE"))