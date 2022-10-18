var express = require('express');
var router = express.Router();

var ProductModel = require('../models/ProductModel.js');

// create
router.post(
    '/create',          // http://localhost:3001/products/create
    function(req, res) {

        var newDocument = {
            "firstname": req.body.course,
            "lastname": req.body.duration,
            "course": req.body.price,
            "phonenumber":req.body.phonenumber,
            "email":req.body.email
        };

        ProductModel
        .create(newDocument)
        .then(
            function(dbDocument) {
                res.json(dbDocument);
            }
        )
        .catch(
            function(dbError) {
                console.log(dbError);
                res.send("Error occured /products/create");
            }
        );
    }
);

module.exports = router;