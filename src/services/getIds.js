const https = require('https');

module.exports = function() {
  const getIds = function(len) {
    return new Promise(function(resolve) {
      const options = {
        host: 'frontend-interview.spotahome.com',
        path: '/api/public/listings/search/markers/madrid'
      };

      const callback = function(response) {
        let stream = '';
        response.on('data', function(chunk) {
          stream += chunk;
          let results = stream;
          const index = results.lastIndexOf('},');
          const ids = JSON.parse(results.slice(0, index) + '}]}').data;
          if (ids.length >= len) {
            resolve(ids);
          }
        });

        response.on('end', function() {
          const ids = JSON.parse(stream);
          resolve(ids);
        });

        response.on('error', e => {
          console.log(e.message);
        });
      };

      https.request(options, callback).end();
    });
  };

  return {
    getIds: getIds
  };
};
