// 'use strict';

// var app = require('../../server/server')
// const bcrypt = require('bcryptjs');

// module.exports = function(User) {

//     app.post('/product/signup', function(req, res, next) {
//         User.find({ email: req.body.email })
//             .then(docs => {
//                 if (docs > 1) {
//                     // console.log(user)
//                     res.status(409).json({
//                         message: 'mail exist'
//                     })
//                 } else {
//                     bcrypt.hash(req.body.password, 10, (err, hash) => {

//                         if (err) {

//                             res.status(500).json({

//                                 error: err

//                             });
//                         } else {

//                             const data = {
//                                 realm: req.body.realm,
//                                 userId: req.body.userId,
//                                 email: req.body.email,
//                                 password: hash

//                             }
//                             User.create(data)
//                                 .then(result => {
//                                     console.log(result)
//                                     res.status(201).json({
//                                         message: 'user created'
//                                     });
//                                 })
//                                 .catch(err => {
//                                     console.log(err)
//                                     res.status(500).json({
//                                         error: err
//                                     })
//                                 });
//                         }

//                     })
//                 }
//             })

//     })
//     app.post('/product/login', function(req, res, next) {

//         // const data = {
//         //     realm: req.body.realm,
//         //     email: req.body.email,
//         //     password: req.body.password
//         // }
//         User.find({ email: req.body.email })
//             .then(user => {
//                 if (user.length < 1) {
//                     res.status(401).json({
//                         message: 'login1 failed'
//                     })
//                 }
//                 bcrypt.compare(req.body.password, user[0].password, (err, result))

//                 if (result) {
//                     res.status(200).json({
//                         message: 'auth success'
//                     })
//                 }
//             })


//     });



//     app.delete('/product/signup/:userId', function(req, res, next) {
//         const id = req.params.userId;
//         User.destroyById(id)
//             .then(result => {
//                 res.status(200).json(result);
//             })
//             .catch(err => {
//                 console.log(err);
//                 res.status(500).json({
//                     error: err
//                 });
//             });
//     })

// };