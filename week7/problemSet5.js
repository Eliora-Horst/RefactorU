console.log("1. Alphabet Soup [Hello World]")

function alphabetSoup(string){
	var letters = string.split("")
	letters.sort()
	return(letters.join(""))
}
console.log(alphabetSoup("Hello World"))

console.log("2. Vowel Count [All cows eat grass]")
function vowelCount (string){
	var vowels = 0;
	for(var i = 0; i<string.length; i++){
		var lower = string[i].toLowerCase();
		if((lower === 'a')||(lower === 'e')||(lower === 'i')||(lower === 'o')||(lower === 'u')){
			vowels++;
		}
	}
	return vowels;
}

console.log(vowelCount("All cows eat grass"))

console.log("Bonus: Coin Determiner [250]")

function coinDeterminer(num){
	var numEleven = 0
	var numNine = 0
	var numSeven = 0
	var numFive = 0

	if (num >= 11){
		var eleven = num/11
		numEleven = Math.floor(eleven)
		num = num - (numEleven*11)
	}

	if (num >= 9){
		var nine = num/9
		numNine = Math.floor(nine)
		num = num - (numNine*9)
	}

	if (num >= 7){
		var seven = num/7
		numSeven = Math.floor(seven)
		num = num - (numSeven*7)
	}

	if (num >= 5){
		var five = num/5
		numFive = Math.floor(five)
		num = num - (numFive*5)
	}
	return num + numEleven + numNine + numSeven + numFive;
}
console.log(coinDeterminer(250))

console.log("Personal Bonus: Change Counter [100] [189c]")

function changeCounter(num){
	var change = num
	var dollar = 0
	var quarter = 0
	var dime = 0
	var nickel = 0
	var check = num%100

		if(check === 0){
			console.log("Now, do you REALLY need help with this?")
		}
		else{
			console.log("For your change, you will need: ")
			if (num >= 100){
				var hundred = num/100
				dollar = Math.floor(hundred)
				num = num - (dollar*100)

				if(dollar === 1){
					console.log(dollar + " dollar,\n")
				}
				else{
					console.log(dollar + " dollars,\n")
				}
			}
			if (num >= 25){
				var twentyFive = num/25
				quarter = Math.floor(twentyFive)
				num = num - (quarter*25)
				if(quarter === 1){
					console.log(quarter + " quarter,\n")
				}
				else{
					console.log(quarter + " quarters,\n")
				}
			}

			if (num >= 10){
				var ten = num/10
				dime = Math.floor(ten)
				num = num - (dime*10)
				if(dime === 1){
					console.log(dime + " dime,\n")
				}
				else{
					console.log(dime + " dimes,\n")
				}
			}

			if (num >= 5){
				var five = num/5
				nickel = Math.floor(five)
				num = num - (nickel*5)
				if(nickel === 1){
					console.log(nickel + " nickel,\n")
				}
				else{
					console.log(nickel + " nickels,\n")
				}
			}
			if(num === 1){
					console.log(num+ " penny,\n")
				}
			else{
					console.log(num+ " pennies.\n")
			}
		}
}
changeCounter(100)
console.log("\n")
changeCounter(189)