const fs = require('fs');

const getConcerts = require('./domain/usecase/getConcerts');

getConcerts.getConcerts ({}, (err, res) => {
  if(err){
    console.log(err);
  }else{
    fs.writeFile('output.json', JSON.stringify(res, null, 4), function(err){
      console.log('File successfully written! - Check your project directory for the output.json file');
    })
  }
})
