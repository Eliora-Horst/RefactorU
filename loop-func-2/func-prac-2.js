//***** 1 *****\\

console.log("Function 1 ({ name: 'Arya', age: 10 })")
function getName(firstName){
	var output = firstName["name"]
	return output;
}
var name = getName({ name: 'Arya', age: 10 });
console.log(name);

//***** 2 *****\\
console.log("\nFunction 2 (['Ours', 'is', 'the', 'fury'])")
function totalLetters(sum){
	var length = sum.length;
	var totalSum = 0;

	for(var i = 0; i<length; i++){
		var total = (sum[i].length);
		totalSum = totalSum+total;
	}
	return totalSum;
}
var arrayOStrings = totalLetters(['Ours', 'is', 'the', 'fury']);
console.log(arrayOStrings);

//***** 3 *****\\
console.log("\nFunction 3 ('House Seat', 'Casterly Rock')")
function getValue(keyPair1){
	this.keyPair1 = keyPair1;
	return keyPair1

}
var display = new getValue(['House Seat','Casterly Rock'])
console.log(display)

//***** 4 *****\\
console.log("\nFunction 4 ((['a','b','c','d', 'e'], -2), (['cersei', 'jaime', 'tyrion'], -1)")
function negativeIndex(array, num){
	var arrayLength = array.length;
	var index = num - num - num;
	var output = arrayLength - index;
	return array[output];
}

var negIndex = negativeIndex(['a','b','c','d', 'e'], -2)
console.log(negIndex);
var negIndex2 = negativeIndex(['cersei', 'jaime', 'tyrion'], -1)
console.log(negIndex2)

//***** 5 *****\\
console.log("\nFunction 5 (martell, mormont)")
function removeM(string){
	var newString = [];
	for (var i = 0; i<string.length; i++){
		if(string[i]!="m"){
			newString.push(string[i])
		}
	}
	return newString;
}
var output = removeM("martell")
var nString = output.join('');
console.log(nString)

var output1 = removeM("mormont")
var nString1 = output1.join('');
console.log(nString1)

// //***** 6 *****\\
console.log("\nFunction 6 ({ a: 10, b: 20, c: 30 }, { Lannister: \"Hear Me Roar!\", Stark: \"Winter is Coming\"})")
function printObject(obj){
	// var objLen = Object.keys(obj).length
	for (var i in obj){
	    console.log(i + " is " + obj[i]);
	}
}
printObject({ a: 10, b: 20, c: 30 })
console.log("\n")
printObject({ Lannister: "\"Hear Me Roar!\"", Stark: "\"Winter is Coming\""})

//***** 7 *****\\
console.log("\nFunction 7 ('What evil odd ducks!', 'Whan that aprill with his shoures soote')")
function vowels(str){
	var vowel = [];
	for (var i = 0; i <=str.length; i++)
		if (str[i] === 'a'){
			vowel.push('a')
		}
		else if (str[i] === 'e'){
			vowel.push('e')
		}
		else if (str[i] === 'i'){
			vowel.push('i')
		}
		else if (str[i] === 'o'){
			vowel.push('o')
		}
		else if (str[i] === 'u'){
			vowel.push('u')
		}
	return vowel;
}
console.log(vowels('What evil odd ducks!'))
console.log(vowels('Whan that aprill with his shoures soote'))

//***** 8 *****\\
console.log("\nFunction 8 (['a', 'a', 'b', 'z'], ['a', 'a', 'r', 'r', 'y', 'y'])")
function twins(arr){
	newArr = []
	for (var i = 0; i < arr.length; i+=2){
		if (arr[i]===arr[i+1]){
			newArr.push(true)
		}
		else{
			newArr.push(false)
		}
	}
	function isTrue(index){
		return index === true;
	}
	console.log(newArr.every(isTrue));

}
twins(['a', 'a', 'b', 'z'])
twins(['a', 'a', 'r', 'r', 'y', 'y'])

//***** 9 *****\\
console.log("\nFunction 9 ([F, F, T, F],[T, F, T, F],[F, F, F],[ ])")
function or(arr){
	for (var i =0; i<arr.length; i++)
		if(arr[i]===true){
			return true;
		}
	return false;
}
console.log(or([false, false, true, false]))
console.log(or([true, false, true, false]))
console.log(or([false, false, false]))
console.log(or([]))

//***** 10 *****\\
console.log("\nFunction 10")
function unique(strArr){
	var newArr = []
	newArr.push(strArr[0])
	
	for (var i = 1; i < strArr.length-1; i++){
		var j=0
		if (strArr[i]!=newArr[j]){
			newArr.push(strArr[i])
		}
	}
	return newArr
}
console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']))
console.log(unique(['todd', 'avery', 'maria', 'avery']))