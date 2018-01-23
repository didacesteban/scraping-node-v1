const ConcertsRemote = require('../datasources/concerts.remote');

module.exports = {
  getConcerts: (options, callback) => {
    ConcertsRemote.getConcerts(options, callback);
  }
};
