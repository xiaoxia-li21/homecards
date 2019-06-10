const axios = require('axios');

module.exports = function() {
  const formater = function(card) {
    return {
      adId: card.adId,
      currencySymbol: card.currencySymbol,
      pricePerMonth: card.pricePerMonth,
      photoUrls: {
        homecardHidpi: card.photoUrls.homecardHidpi
      },
      title: card.title
    };
  };

  const getHomecards = function(results) {
    return results.map(item =>
      axios.get(
        'https://frontend-interview.spotahome.com/api/public/listings/search/homecards_ids?ids[]=' +
          item
      )
    );
  };

  const getCards = function(ids) {
    return new Promise(function(resolve) {
      let cards = '';
      axios.all(getHomecards(ids)).then(
        axios.spread(function(...args) {
          cards = args.map(item => formater(item.data.data.homecards[0]));
          resolve(cards);
        })
      );
    });
  };

  return {
    getCards: getCards
  };
};
