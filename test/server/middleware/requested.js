var app = ('../../server/server.js');

module.exports = function() {

    return function requested(req, res, next) {

        console.log("Requeseted ip:", req.ip);
        next();
    };

};