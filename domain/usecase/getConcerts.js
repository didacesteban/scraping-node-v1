const ConcertsRepository = require('../model/concerts.repository');

module.exports = {
  getConcerts: (options, callback) => {
    ConcertsRepository.getConcerts(options, callback);
  }
};
