//** Required **
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//** For serving static files **
app.use( express.static(__dirname + '/public') );

// ** Route **
app.get('/', function(req, res){
  console.log('Query : ', req.query)
  res.sendFile('form.html', {root : './public'});
});

app.post('/formsubmit', function(req, res){
  console.log('Form :', req.body)
  res.redirect('/submit/' + req.body.firstname + '/' + req.body.lastname)
})

app.get('/submit/:firstname/:lastname', function(req, res){
  res.send(req.params.firstname + " "+req.params.lastname +", you have successfully signed up.")
})

//** IMPORTANT! Makes the server and listens for connection **
var port = 3000;

app.listen(port, function(){
  console.log('Server running on port ' + port);
});