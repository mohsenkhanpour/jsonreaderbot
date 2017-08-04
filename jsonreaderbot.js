const TeleBot = require('telebot');

const bot = new TeleBot({
    token: 'TELEGRAM_BOT_TOKEN',
    polling: { 
        interval: 1000, 
        timeout: 0, 
        limit: 100, 
        retryTimeout: 5000, 
    });

var request = require("request");

var options = { method: 'GET',
  url: 'https://newsapi.org/v1/articles',
  qs: 
   { source: 'techcrunch',
     apiKey: '5b25d3f23e714329b10bf74a3b8c4847' },
  headers: 
   { 'postman-token': '93cdcb0e-1a50-4414-85d2-662bd83016fc',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
	
	