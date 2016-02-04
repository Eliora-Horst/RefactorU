var colorutil = require ('./colorutil.js')

var color = colorutil()
console.log(color.luminosity(process.argv[2],process.argv[3],process.argv[4]))