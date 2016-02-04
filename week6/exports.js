exports.luminosity = function (r, g, b){
	var luminosity = 0.2126*r + 0.7152*g + 0.0722*b
	return luminosity
}