var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/candyDB')

var candySchema = mongoose.Schema({
	name		: {type : String, required : true},
	highFructose: {type : Boolean, default : true},
	nuts		: Boolean,
	calories	: Number,
	sweetness	: Number,
	bestFriend	: String,

});

var Candy = mongoose.model('Candy', candySchema)

var heathBar = new Candy({
	name: 'Heath Bar',
	highFructose: false,
	nuts: true,
	calories: 1020,
	sweetness: 7.65,
	bestFriend: 'Cadbury Eggs'
})

heathBar.save(function(err, data){
	console.log('ERR : ', err)
	console.log('DATA : ', data)
})

Candy.find({}, function(err, candies){
	console.log("Candy.... : ", candies)
})