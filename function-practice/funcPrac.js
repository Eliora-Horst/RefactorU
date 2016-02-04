//***** 1 ****************************************
console.log("1. tripleFive")
function tripleFive(){
	var triple = [];
	for(var i = 0; i<3; i++){
		console.log("Five!")
	}
}
var word1=[] 
word1 = tripleFive();
&console.log(" ");

//***** 2 ****************************************
console.log("2. lastLetter (hello)")
function lastLetter(string){
	return string.slice(-1)
}
var word2 = lastLetter("hello");
console.log(word2);
console.log(" ");

//***** 3 ****************************************
console.log("3. square (7)")
function square (number){
	return number*number;
}
var number1 = square(7);
console.log(number1)
console.log(" ");

//***** 4 ****************************************
console.log("4. negate (7 and -2)");
function negate(number){
	return (number - (number+number));
}
var number2 = negate(7);
console.log(number2);
var number3 = negate(-2);
console.log(number3);
console.log(" ");

//***** 5 ****************************************
console.log("5. toArray (2, 47, 19)");
function toArray(a, b ,c){
	var array = [];
	array.push(a);
	array.push(b);
	array.push(c);
	return array;
}
var array1 = [];
array1 = toArray(2, 47, 19);
console.log(array1);
console.log(" ");

//***** 6 ****************************************
console.log("6. startsWithA (anthropomorphic, sepulchre)");
function startsWithA(word){
	if(word[0] === ("A" && "a")){
		return true;
	}
	else{
		return false;
	}
}
var word3 = startsWithA("anthropomorphic");
console.log(word3);
var word4 = startsWithA("sepulchre");
console.log(word4);
console.log(" ");

//***** 7 ****************************************
console.log("7. excite (obsolescence)");
function excite(word){
	return word+"!!!";
}
var word5 = excite("obsolescence");
console.log(word5);
console.log(" ");

//***** 8 ****************************************
console.log("8. sun (gesundheit, multisyllabic)");
function sol(word){
	var str = word.indexOf("sun");
	if(str === -1){
		return false;
	}
	else{
		return true;
	}
}
var word6 = sol("gesundheit");
console.log(word6);
word6 = sol("multisyllabic");
console.log(word6);
console.log(" ");

//***** 9 ****************************************
console.log("9. tiny (2, -47, 0.71)");
function tiny(number){
	if(number<0){
		return false;
	}
	else if(number>1){
		return false;
	}
	else{
		return true;
	}
}
var number4 = tiny(2);
var number5 = tiny(-47);
var number6 = tiny(0.71);
console.log(number4+"\n"+number5+"\n"+number6);
console.log(" ");

//***** 10 ***************************************
console.log("10. getSeconds (02:42, 11:83)")
function getSeconds(time){
	var units = time.split(':');
	var min = units[0];
	var sec = units[1];
	return Number(min*60)+Number(sec);
	}
var outTime = getSeconds("02:42");
console.log(outTime);
outTime = getSeconds("11:83");
console.log(outTime);