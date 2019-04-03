var app = require('../../server/server')



module.exports = function() {
    console.log(" it is working here");
    return function auth(req, res, next) {
        console.log(" it is not working here");
        if (!req.accessToken) {
            next();
        }
        app.models.user.findById(req.accessToken.userId, function(err, user) {
            if (err) {
                next(err);
            }
            if (!user) {
                next(new Error('No user with this access token was found.'));
            } else {
                console.log(' ok '); // it is not working.
                req.session.user = user;
                next();
            }
        });
    };
};