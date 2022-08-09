var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Bosta Payment Platform',
    amount: process.env.AMOUNT,
    paypal_client_id: process.env.PAYPAL_CLIENT_ID
  });
});

module.exports = router;