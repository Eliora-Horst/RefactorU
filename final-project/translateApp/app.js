// Requires
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var db = require('../dictEntry/dictionary.json')
var _ = require('underscore')

// Create Express App Object
var app = express()

// Initial Configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static(__dirname + '/public'))

// Routes \\

app.get('/', function(req, res){
	res.sendFile(path.resolve('./public/html/index.html'))
})


app.post('/search', function(req, res){
	query = req.body.queryEntry

	translateArr = []
	queryLength = query.split('.')

	for(var sentence = 0; sentence < queryLength.length; sentence++){
		if(queryLength[sentence]){
			var querySentence = queryLength[sentence].split(' ')
			//querySentence = array words in sentence
			for(var word = 0; word < querySentence.length; word++){
				//word = individual words in sentence
				var currentWord = querySentence[word]
				currentWord = currentWord.toLowerCase()
				console.log(currentWord)
				var wordLength = currentWord.length
				var lastChar = wordLength-1;

				// console.log(currentWord[lastChar]===',')
				var modEngWord = currentWord.substring(0, currentWord.length-1);
				// console.log(modEngWord)

					var match = db.filter(
						function(value){
							if((currentWord[lastChar])===','){
								return(value.MidEng === modEngWord)
							}
							else{
								return(value.MidEng === currentWord)
							}

						}
					)
				var toPush = _.clone(match[0]||{ModEng:currentWord})

				if((currentWord[lastChar])===','){
					toPush.ModEng+=","
					translateArr.push(toPush)
				}
				else if(word === querySentence.length-1){
					toPush.ModEng+="."
					translateArr.push(toPush)
				}
				else{
					translateArr.push(toPush)
				}

			console.log(translateArr[word])
			}
			//add a space here/period
		}
	}
		res.send(translateArr)
})



// Create Server 
var port = 3000
app.listen(port, function(){
	console.log('Server running on port ' + port)
})