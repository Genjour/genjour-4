var express = require('express');
var router = express.Router();
var auth = require('../../../auth/auth.service');
var supportUserController = require('./supportUser-controller');

router.post('/supportGenjourist/:userId/:supportId', supportUserController.supportGenjourist);
router.get('/getSupportingList/:userid', supportUserController.getSupportingList);
router.get('/supportersList/:userid', supportUserController.getSupportersList);
router.get('/checkSupportStatus/:userId/:genjouristId', supportUserController.checkSupportStatus);

module.exports = router;
