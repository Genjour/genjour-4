'use strict';

var config = require('../config/local');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var compose = require('composable-middleware');
var User = require('../models/user');

var validateJwt = expressJwt({ secret: config.secrets.session });

function isAuthenticated() {
   
    return compose()
    
         .use(function(req, res, next) {
            if (req.query && req.query.hasOwnProperty('access_token')) {
                 req.headers.authorization = req.query.access_token ;
            
            }
        
            validateJwt(req, res, next);
        })

        .use(function(req, res, next) {

            User.findById(req.user._id, function(err, user) {
                if (err) return next(err);
                if (!user) return res.send(401);
                req.user = user;
                next();
            });
         });
}

function signToken(id, role, remember) {
    var expiresIn = 60 * 60 * 8;
    if (remember) {
        expiresIn = 60 * 60 * 24 * 365;
    }
    var token = jwt.sign({ _id: id }, config.secrets.session, { expiresIn: expiresIn });
    updateLastLoginDate(id);
    return token;

}

function updateLastLoginDate(id) {
    User.update({ "_id": id }, { $set: { "lastLogin": new Date() } }, function(err, user) {
        if (err) {}

    })
}
/**
 * Set token cookie directly for oAuth strategies
 */

function setTokenCookie(req, res) {

    if (!req.user) return res.json(404, { message: 'Something went wrong, please try again.' });

    var token = signToken(req.user._id, req.user.role, req.query.remember);
     if(req.user.status==true){
        var redirectUrl = '/login/' + token;
        res.redirect(redirectUrl);
     }
     else{
        res.redirect('/access-denied');
     }
  
}

function isAuthorized(role) {
    return compose()
        .use(function(req, res, next) {
            if (req.query && req.query.hasOwnProperty('access_token')) {
                req.headers.authorization = 'Bearer ' + req.query.access_token;
            }
            validateJwt(req, res, next);
        })
        .use(function(req, res, next) {
            User.findById(req.user._id, function(err, user) {
                if (err)
                    return next(err);
                if (!user)
                    return res.send(401);
                req.user = user;
                if (role.indexOf(req.user.role) >= 0) {
                    next();
                } 
                else {
                    return res.send(401);
                }
            });
        });
}
exports.isAuthorized = isAuthorized;
exports.isAuthenticated = isAuthenticated;
exports.signToken = signToken;
exports.setTokenCookie = setTokenCookie;
exports.setLocalToken = setTokenCookie;