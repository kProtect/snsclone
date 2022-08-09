class Paypal{
    handleRequest(req, res){
        //Storing the results to db
        var MongoClient = require('mongodb').MongoClient
        MongoClient.connect('mongodb://localhost:27017/payments', function (err, client) {
            if (err) throw err
            var db = client.db('payments')
            db.collection('sales').insert({
                request: req.body
            });
        });

        res.render('message', {
            title: 'Payment Successfully Completed.',
            message: 'Using Paypal.'
        });
    }
}

module.exports = Paypal;