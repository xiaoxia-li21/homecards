const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const homecardsRouter = express.Router();
const getIdsService = require('../services/getIds')();
const getCardsService = require('../services/getCards')();

homecardsRouter.route('/homecards/:limit').get((req, res) => {
  const len = parseInt(req.params.limit, 10);
  getIdsService
    .getIds(len)
    .then(function(response) {
      let results = [];
      for (let i = 0; i < len; i++) {
        results = [...results, response[i].id];
      }
      return results;
    })
    .then(function(results) {
      return getCardsService.getCards(results);
    })
    .then(function(cards) {
      return res.json(cards);
    })
    .catch(function(error) {
      console.log(error);
    });
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', homecardsRouter);
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
