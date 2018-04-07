var express = require('express');
var controller = require('./user-controller');
var router = express.Router();
var auth = require('../../auth/auth.service');

router.post('/register', controller.register)
router.get('/get/:id',controller.getUserById)
router.post('/forgot-password',  controller.forgotpassword)
router.post('/reset/:token',  controller.resetPassword)
router.get('/profile',auth.isAuthenticated(), controller.getProfile)
router.post('/profile', auth.isAuthenticated(), controller.updateUserProfile)
router.get('/profileAdmin',  controller.getAllProfiles)
router.put('/profileAdmin/:_id', controller.changeStatus)
router.post('/changePassword', auth.isAuthenticated(),controller.changePassword)
router.delete('/profileImage', auth.isAuthenticated(), controller.deleteImage)
router.get('/subscribe', controller.addSubscription)

module.exports = router;