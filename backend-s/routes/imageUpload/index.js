var express = require('express')
var controller = require('./image-controller')
var router = express.Router()
var auth = require('../../auth/auth.service')

router.post('/', auth.isAuthenticated(), controller.uploadStoryImage)
router.post('/user', auth.isAuthenticated(), controller.uploadUserImage)

module.exports = router
