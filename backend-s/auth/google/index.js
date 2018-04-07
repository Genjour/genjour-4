'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');
require('./passport').setup();
var router = express.Router();

router
    .get('/', function(req, res, next) {
        passport.authenticate('google', {
            failureRedirect: '/',
            scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email'
            ],
            session: false
        })(req, res, next);
    })

.get('/callback', passport.authenticate('google', {
    failureRedirect: '/',
    session: false
}), auth.setTokenCookie);

router.get('/user', auth.isAuthenticated(),function(req, res) {
    if (!req.user) { return res.status(500).json(err); }
    return res.status(200).json(req.user)
})
module.exports = router;