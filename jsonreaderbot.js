require('dotenv').config()
const TeleBot = require('telebot');
const bot = new TeleBot(process.env.BOT_TOKEN);

var request = require("request");
var options = { method: 'GET',
  url: 'https://newsapi.org/v1/articles',
  qs: 
   { source: 'bbc-news',
	 sortBy: 'top',
     apiKey: process.env.NEWSAPI },
   json: true};


	
	bot.start();

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  
  var source = body.source
  var title = body.articles[0].title
  var urlToImage = body.articles[0].urlToImage
  var url =  body.articles[0].url
  var summary = body.articles[0].description
  console.log(body);
  
  bot.sendMessage(-242559392, '<b>${title}</b>+${summary}+${url}' , {parseMode: 'html', disable_web_page_preview: false , webPreview: urlToImage});
  

});




	

