//Function 1 ************************************
console.log("1. Add Numbers [88Hello 3World!]")

function addNumbers(string){
	var words = string.split(" ")
	var a = 0
	var b = 0
	var c = 0
	for(var i = 0; i<words.length; i++){
		var letters = words[i].split("")
		for(var j = 0; j<letters.length; j++){
			if ((parseInt(letters[j]))&&(parseInt(letters[j+1]))){
				a = parseInt(letters[j])
				b +=(a*10)
			}
			else if (parseInt(letters[j])){
				b += parseInt(letters[j])

			}
		}
	}
	return b
}

console.log(addNumbers("88Hello 3World!\n"))

//Function 2 ************************************
console.log("\n2. Longest Word [It was many and many a year ago, in a kingdom by the sea.]")

function longestWord(string){
	var words = string.split(" ")
	var longestWord = ""

	for(var i = 0; i<words.length; i++){
		for(var j = 0; j<words.length; j++){
			if((words[i].length>words[j].length)&&(words[i].length>longestWord.length)){
				longestWord = words[i]
			}
		}
	}
	return(longestWord)
}
console.log("Longest word in string: "+longestWord("It was many and many a year ago, in a kingdom by the sea.\n"))

//Bonus ************************************
console.log("\nBonus: Average String Numbers [Hello6 9World 2, Nic8e D7ay!]")
function averageStringNumbers(string){
	var words = string.split(" ")
	var a = 0
	var b = 0
	var c = 0
	for(var i = 0; i<words.length; i++){
		var letters = words[i].split("")
		for(var j = 0; j<letters.length; j++){
			if ((parseInt(letters[j]))&&(parseInt(letters[j+1]))){
				a = parseInt(letters[j])
				b +=(a*10)
			}
			else if (parseInt(letters[j])){
				b += parseInt(letters[j])

			}
			else{
				c++;
			}
		}
	}
	return Math.round(b/c)
}
console.log("Average String Numbers: "+averageStringNumbers("Hello6 9World 2, Nic8e D7ay!"))
//This doesn't take special characters into account