var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('./../../models/user');
var config = require('./../../config/local')
const Mailer = require('../../mailer/creator');
exports.setup = function() {
    var clientID = config.google.clientID;
    var clientSecret = config.google.clientSecret;
    var callbackURL = config.google.callbackURL;
    passport.use(new GoogleStrategy({
            clientID: clientID,
            clientSecret: clientSecret,
            callbackURL: callbackURL,
            passReqToCallback: true
        },
        function(req, accessToken, refreshToken, profile, done) {
            var email = null;
            var condition = {
                $or: [{
                    'google.id': profile.id
                }]
            };
            if (profile.emails && profile.emails[0]) {
                email = profile.emails[0].value;
                condition.$or.push({
                    email: email
                });
            }
            var json = profile._json;
            var image=json.image.url;
            User.findOne(condition, function(err, user) {
              
                if (!user) {
                    user = new User({
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        imageUrl:image,
                        username: profile.name.givenName + Date.now(),
                        provider: 'google',
                        gender: profile.gender,
                        google: profile._json,
                        emailVerified: true
                    });
                  
                    user.save(function(err) {
                        if (err) {
                            return done(err);
                        }
                        var options = {
                            name: user.name,
                            subject: 'Welcome To ThanksMummy!!!',
                            email:user.email,
                            username:user.username
                          };
                        Mailer.newUser(req,user.email,options)
                        return done(err, user);
                      
                    });

                    return done(err, user);
                } else {
                    return done(err, user);
                }
            });
        }
    ));
}