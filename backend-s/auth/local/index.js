'use strict';
const User = require('../../models/user');
var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');
require('./passport').setup();
var router = express.Router();

router.post('/',function(req, res, next) { passport.authenticate('local', 
function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.json({success: false,msg: 'Invalid email or Password'}) }
     req.logIn(user, function(err) {
      if (err) { return next(err); }
      var token = auth.signToken(req.user._id, req.user.role, req.query.remember);
     if(req.user.status==true){
       var token = auth.signToken(req.user._id, req.user.role, req.query.remember);
        res.json({
            success: true,
            token: token,
            user: {
              _id: req.user._id,
              name: req.user.name}
          });
     }
     else{
        res.json({success: false,msg: 'Your Profile is Blocked due to some unusual Activity.Please Contact admin@genjour.com'})
     }
    });
  })(req, res, next)})
  
  router.post('/admin',function(req, res, next) { passport.authenticate('local', 
  function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.json({success: false,msg: 'Invalid email or Password'})}
       req.logIn(user, function(err) {
        if (err) { return next(err); }
       if(req.user.role=='admin'){
          var token = auth.signToken(req.user._id, req.user.role, req.query.remember);
          res.json({
              success: true,
              token: token,
              user: {
                _id: req.user._id,
                name: req.user.name}
            });
       }
       else{
          res.json({success: false,msg: 'Access Denied!! You are not Admin!!!!'})
       }
      });
    })(req, res, next)})
  
module.exports = router;
