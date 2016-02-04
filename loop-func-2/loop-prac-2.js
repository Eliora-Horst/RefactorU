var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

//***** 1 *****\\
for(var i=0; i<4; i++){
	console.log(animals[i]);
}

//***** 2 *****\\
for(var i=0; i<5; i+=2){
	console.log(animals[i]);
}

//***** 3 *****\\
for(var i=5; i>=0; i--){
	console.log(animals[i]);
}

//***** 4 *****\\
for (var i=0; i<5; i++)
{
	if(i===1 || i === 2 || i===3){
		console.log(animals[i]);
		console.log(animals[i]);
	}
	else{
		console.log(animals[i]);
	}
}