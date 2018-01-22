var request = require('request');
var cheerio = require('cheerio');

var getConcerts = (options, callback) => {

  var url = 'http://www.salarazzmatazz.com/op/conciertos/01,2018';

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      var json = [];

      $('.sala').filter(function(){
        json.push({
          "sala": $(this).children().first().text().trim(),
          "band": $(this).children().last().text().trim()
        })
      })
      
      callback(null, json);
    }
    else{
      callback('Something goes wrong');
    }
  })
};

module.exports.getConcerts = getConcerts;
