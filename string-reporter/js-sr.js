var word = prompt("Enter any word: ");
var wordLen = word.length;
var thirdLet = word[2];
var lowerC = word.toLowerCase();
var upperC = word.toUpperCase();
var subStr = word.substring(1,4);

alert("You entered the word: \""+word+"\"\n"+"Your word contains "+wordLen+" letters.\n"+"The third letter of \""+word+"\" is: "+thirdLet+"\nIn lowercase: "+lowerC+" \nIn uppercase: "+upperC+"\nUsed in a sentence: When you say "+word+", what do you mean exactly?\nSubword: "+subStr);
