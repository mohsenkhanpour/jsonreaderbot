
const TeleBot = require('telebot');
const bot = new TeleBot('416270540:AAGGc8-9Y5Q8hhsPR0Xw6l47_g89YsGqny0');
 

var request = require("request");
var options = { method: 'GET',
  url: 'https://newsapi.org/v1/articles',
  qs: 
   { source: 'techcrunch',
     apiKey: '5b25d3f23e714329b10bf74a3b8c4847' },
   json: true};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  var source = body.articles[0].title
  console.log(body);
  bot.sendMessage(-242559392, source);
});


	bot.start();
	

bot.on('text', (msg) => {
	console.log(msg)
	msg.reply.text(msg.text)});