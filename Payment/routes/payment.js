var express = require('express');
var router = express.Router();

const Paypal = require('./payment-processors/Paypal.js');
const Braintree = require('./payment-processors/Braintree.js');


router.post('/', function(req, res, next) {
  
  switch(req.body['payment-option']) {
    case 'paypal':
      var payment_processor = new Paypal();
      break;
    default:
      var payment_processor = new Braintree();  
  }

  payment_processor.handleRequest(req, res)
});

module.exports = router;