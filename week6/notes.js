// console.log('Hello Node')
// console.log(process.argv)

// console.log(process.argv[3].toUpperCase())

// module.exports = "exported data"


// var fs = require ('fs')

// var notesText = fs.readFileSync(process.argv[3], 'utf-8')

// var newText = fs.writeFileSync(process.argv[4], notesText)
// console.log(newText)

// var fs = require('fs')
// var sourceFileName = process.argv[2]
// var targetFileName = process.argv[3]
// var sourFileContents = fs.readFileSync(sourceFileName, 'utf-8')
// fs.writeFileSync(targetFileName, sourFileContents)

var http = require('http')

var server = http.createServer(function(request, response){
	res.writeHead(200,{'Content-Type': 'text/plain'})
	res.end('Hello World')
})