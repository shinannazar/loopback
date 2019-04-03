'use strict';

var app = require('../../server/server')

module.exports = function(Orders) {


    app.get('/orders', function(req, res, next) {

        res.status(200).json({
            message: 'orders are fetched'
        })


    })
    app.post('/orders', function(req, res, next) {

        const order = {
            productId: req.body.productId,
            quantity: req.body.quantity
        }

        res.status(201).json({

            message: 'orders are created',
            order: order
        })
    })

    app.get('/orders/:ordersId', function(req, res, next) {

        res.status(200).json({

            message: 'order detail is',
            OrdersId: req.params.ordersId
        })
    })


    app.delete('/orders/:ordersId', function(req, res, next) {

        res.status(200).json({

            message: 'order is deleted',
            OrdersId: req.params.ordersId
        })
    })




};