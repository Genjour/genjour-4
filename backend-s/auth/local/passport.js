'use strict'
 const User = require('../../models/user');
 const config = require('../../config/local');
var passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
exports.setup = function() {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'},
  function(username, password, done) {
    
   
      User.findOne({
        email: username
      }, function(err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false);
        
        }
        if(user){
        if(user.password){
          User.comparePassword(password, user.password, (err, isMatch) => {
            if(isMatch){
           
              return done(null, user);
            }
            else{
              return done(null, false);
              
            }      
          }) 
        }
       else{
        return done(null, false);
       }
      }     
      });
  }
));
}