console.log("***** Palindrome *****")
function palindrome(str){
	var reverseStr = ''
	str = str.replace(/\s/g,'');
	for (var i = str.length - 1; i>=0 ; i--){
		reverseStr += str[i]
	}
	if(str === reverseStr){
		return true;
	}
	else{
		return false;
	}
}
console.log("heteropalindrome: "+palindrome("heteropalindrome"))
console.log("go hang a salami, im a lasagna hog: "+palindrome("go hang a salami, im a lasagna hog"))

console.log("\n***** Dash Insert *****\n(00135813)")
function dashInsert(num){
	var newNum = num.split('')
	for(var i = 0; i<newNum.length; i++){
		if(newNum[i]%2 === 1){
			newNum[i] = newNum[i]+'-'
		}
	}
	return newNum.join("")
}
console.log(dashInsert("00135813"))

console.log("\n***** Caesar Cipher *****\n(Panic)")
function caesarCipher(str, shiftNum){

		// str.charCodeAt()
		// console.log(str[0])
		var newStr = []
	for( var i = 0; i<str.length; i++){

		//there must be a better way to only accept letters
		if(str[i]!=' '&&str[i]!='0'&&str[i]!='3'&&str[i]!='@'){
			var asciiChar = (str.charCodeAt(i))

			var shifted = asciiChar + shiftNum

			var newShift = (String.fromCharCode(shifted))
			newStr.push(newShift)
		}
		else{
			newStr.push(str[i])
		}
	}
	return newStr.join("")
}
console.log(caesarCipher("Caesar Cipher", 2))
console.log(caesarCipher("L0L t3xt sp3@k", 3))

// var res = String.fromCharCode(65);
// console.log(res)