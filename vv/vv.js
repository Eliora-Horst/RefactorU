var vicInfo=[];
var response = prompt("Enter number of disaster victims");
for(var i = 1; i<=response; i++){
	var responseName = prompt("Victim "+i+"'s Name");
	var responseNumber= prompt("Victim "+i+"'s Phone Number");
	var responseStreet= prompt("Victim "+i+"'s Street Address");

	vicInfo.push({
		name: responseName,
		phoneNum: responseNumber,
		streetAdd:responseStreet,
	});
}
console.log(vicInfo);

var volInfo=[];
var responseVol = prompt("Enter number of disaster volunteers");
for(var i = 1; i<=responseVol; i++){
	var responseName = prompt("Volunteer "+i+"'s Name");
	var responseNumber= prompt("Volunteer "+i+"'s Phone Number");
	var responseStreet= prompt("Volunteer "+i+"'s Street Address");

	volInfo.push({
		name: responseName,
		phoneNum: responseNumber,
		streetAdd:responseStreet,
	});
}
console.log(volInfo);