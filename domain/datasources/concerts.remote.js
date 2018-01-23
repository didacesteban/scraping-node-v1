const request = require('request');
const cheerio = require('cheerio');

module.exports = {
  getConcerts: (options, callback) => {
    let url = `http://www.salarazzmatazz.com/op/conciertos/01,2018`;
    request(url, (error, response, html) => {
      if(!error){
        let $ = cheerio.load(html);

        let json = [];

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
  }
};
