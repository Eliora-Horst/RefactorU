// Requires
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var db = require('../dictEntry/dictionary.json')

// Create Express App Object
var app = express()

// Initial Configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static(__dirname + '/public'))

// Routes \\

app.get('/', function(req, res){
	res.sendFile(path.resolve('./public/html/home.html'))
})


app.post('/searchDictionary', function(req, res){
	query = req.body.queryEntry
	var match = db.filter(
		function(value){
			return(value.MidEng === query)
		}
	)
	// res.send(match[0].MidEng + " " +match[0].DictDef)
	res.send(match[0])
})



// Create Server 
var port = 3000
app.listen(port, function(){
	console.log('Server running on port ' + port)
})