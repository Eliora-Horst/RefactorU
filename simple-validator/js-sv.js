//***** Phone Number ******************************************************************
//**Validation function**
function phoneNumberValidate(phoneNum){
	var phoneRegEx = /\d{3}[-]\d{3}[-]\d{4}$/;
	var validator = phoneRegEx.test(phoneNum);

	if(validator === true){
		return true;
	}
	else{
		return false;
	}
}
//***** User Interaction *****
var number = prompt("Please enter your phone number (xxx-xxx-xxxx)");
var isValid = phoneNumberValidate(number);

while(isValid != true){
	number = prompt("Invalid Number.\nPlease enter your phone number (xxx-xxx-xxxx)");
	isValid = phoneNumberValidate(number);
}
//*************************************************************************************

//***** Birth Date ********************************************************************
//**Validation Function**
function validBirthDay(date){
	var bDayRegEx = /\d{2}[\/]\d{2}[\/]\d{4}$/;
	var validator = bDayRegEx.test(date);

	if(validator === true){
		return true;
	}
	else{
		return false;
	}
}
//***** User Interaction *****
var bDay = prompt("Enter you date of birth (xx/xx/xxxx)")
var bDayValid = validBirthDay(bDay);

while(bDayValid != true){
	bDay = prompt("Invalid DOB.\nEnter you date of birth (xx/xx/xxxx)");
	bDayValid = validBirthDay(bDay);
}

//***** Postal Code **********************************************************************
//**Validation Function**
function validPostCode(postCode){
	var postCodeRegEx = /\d{5}[-]?(\d{4})?$/;
	var validator = postCodeRegEx.test(postCode);

	if(validator === true){
		return true;
	}
	else{
		return false;
	}
}
//***** User Interaction *****
var postCode = prompt("Enter your postal code (xxxxx OR xxxxx-xxxx)");
var postCodeValid = validPostCode(postCode);

while(postCodeValid != true){
	postCode = prompt("Invalid postal code.\nEnter your postal code (xxxxx OR xxxxx-xxxx)");
	postCodeValid = validPostCode(postCode);
}

//***** State Abbr *************************************************************************
//**Validation Function**
function validStateAbbr(stateAbbr){
	var stAbbrRegEx = /[A-Z]{2}$/;
	var validator = stAbbrRegEx.test(stateAbbr);

	if(validator === true){
		return true;
	}
	else{
		return false;
	}
}
//***** User Interaction *****
var stateAbbr = prompt("Enter your State's abbreviation (all caps)");
var isValid = validStateAbbr(stateAbbr);
console.log(isValid);

while((isValid != true)||(stateAbbr.length != 2)){
	stateAbbr = prompt("Invalid State abbreviation\nEnter your State's abbreviation (all caps)");
	isValid = validStateAbbr(stateAbbr);
}

//***** Married *******************************************************************************
var married = prompt("Are you married? (Yes or No)")
while(married!="Yes"&&married!="yes"&&married!="YES"&&married!="No"&&married!="no"&&married!="NO"){
	married = prompt("Invalid answer.\nAre you married? (Yes or No)");
}