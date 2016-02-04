
function luminosity(r, g, b){
	return (0.2126*r + 0.7152*g + 0.0722*b)
}
var tone = luminosity(process.argv[2], process.argv[3], process.argv[4])

if (tone > 155) {
	console.log('Light')
}
else{
	console.log('Dark')
}


