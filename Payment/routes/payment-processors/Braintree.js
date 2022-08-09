class Braintree {
    handleRequest(req, res) {
        var braintree = require('braintree');

        var gateway = braintree.connect({
            environment: braintree.Environment.Sandbox,
            merchantId: process.env.BRAINTREE_MERCHANT_ID,
            publicKey: process.env.BRAINTREE_PUBLIC_KEY,
            privateKey: process.env.BRAINTREE_PRIVATE_KEY
        });

        gateway.transaction.sale({
            amount: req.body.amount,
            paymentMethodNonce: 'nonce-from-the-client',
            customer: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                company: req.body.company,
                phone: req.body.phone,
                fax: req.body.fax,
                email: req.body.email,
                website: req.body.website
            },
            creditCard: {
                cardholderName: req.body.cardholderName,
                number: req.body.cardNumber,
                cvv: req.body.cardCvv,
                expirationMonth: req.body.cardExpirationMonth,
                expirationYear: req.body.cardExpirationYear
            },
            //Blilling and shipping data are dummmy, just for protopying and testing.
            billing: {
                firstName: "Paul",
                lastName: "Smith",
                company: "Braintree",
                streetAddress: "1 E Main St",
                extendedAddress: "Suite 403",
                locality: "Chicago",
                region: "IL",
                postalCode: "60622",
                countryCodeAlpha2: "US"
            },
            shipping: {
                firstName: "Jen",
                lastName: "Smith",
                company: "Braintree",
                streetAddress: "1 E 1st St",
                extendedAddress: "5th Floor",
                locality: "Bartlett",
                region: "IL",
                postalCode: "60103",
                countryCodeAlpha2: "US"
            },
            options: {
                submitForSettlement: true
            }
        }, function (err, result) {
            if (err) {
                console.error(err);
                return;
            }

            //Storing the results to db
            var MongoClient = require('mongodb').MongoClient
            MongoClient.connect('mongodb://localhost:27017/payments', function (err, client) {
                if (err) throw err
                var db = client.db('payments')
                db.collection('sales').insert({
                    request: req.body,
                    result: result
                });
            });

            if (result.success) {
                res.render('message', {
                    title: 'Payment Successfully Completed.',
                    message: 'Transaction ID: ' + result.transaction.id
                });
            } else {
                console.error(result.message);
                res.render('message', {
                    title: 'Payment Failed!',
                    message: result.message
                });
            }
        });
    }
}

module.exports = Braintree;