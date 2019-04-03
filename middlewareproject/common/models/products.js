'use strict';

var app = require('../../server/server');

// var bodyparser = require('body-parser');
// app.use(bodyparser.urlencoded({ extended: false }));
// app.bodyparser(json());



module.exports = function(Products) {
    app.get('/products/getall', function(req, res, next) {
        Products.find({ fields: ['name', 'price', 'productId'] })
            //.select("name price productId")
            //.exce()
            .then(docs => {
                console.log(docs)
                const respond = {
                    count: docs.length,
                    product: docs
                };
                res.status(200).json(respond);
                //console.log(respond);
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    error: err
                })
            })
    })

    app.post('/products/create', function(req, res, next) {
        const data = {
            productId: req.body.productId,
            name: req.body.name,
            price: req.body.price

        }

        Products.create(data)
            .then(result => {
                res.status(201).json({

                    message: 'handling post',
                    createdProduct: result
                });
            })
    })


    app.get('/productscreated/:productsId', function(req, res, next) {

        const id = req.params.productsId;
        Products.findById(id)
            .then(doc => {
                console.log("from database", doc)
                if (doc) {
                    res.status(200).json(doc);
                } else {
                    res.status(404).json({
                        message: 'no valid data for id'
                    });
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: 'err'

                })
            });

    })

    app.patch('/productscreated/:productsId', function(req, res, next) {

        const id = req.params.productsId;
        const updateOps = {};
        for (const ops of req.body) {
            updateOps[ops.proName] = ops.value;
        }
        Products.upsertWithWhere({ _id: id }, updateOps)

        .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    })


    app.delete('/productscreated/:productsId', function(req, res, next) {
        const id = req.params.productsId;
        Products.destroyById(id)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    })


}