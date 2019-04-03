'use strict';

var app = require('../../server/server')
const bcrypt = require('bcryptjs');

module.exports = function(User) {
    User.validatesUniquenessOf('email', { message: 'email is not unique' });

    app.post('/product/signup', function(req, res, next) {

        const data = {
                realm: req.body.realm,
                userId: req.body.userId,
                email: req.body.email,
                password: req.body.password

            }
            // if (req.body.email == verifyemail) {
            //     res.status.json({
            //         message: 'email already exist'
            //     })
            // } else {
        User.create(data)
            .then(result => {
                console.log(result)
                res.status(201).json({
                    message: 'user created'
                });
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    error: err
                })

            })

    })



    app.post('/product/login', function(req, res) {



        const data = {
            realm: req.body.realm,
            email: req.body.email,
            password: req.body.password

        }
        User.login(data)
            .then(user => {
                if (user.length < 1) {
                    res.status(401).json({
                        message: 'login failed'
                    });
                    return;
                }

                res.status(200).json({
                    message: 'success',
                    token: user.id
                })
            });

    });

    app.delete('/product/signup/:userId', function(req, res, next) {
        const id = req.params.userId;
        User.destroyById(id)
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

};