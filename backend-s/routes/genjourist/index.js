var express = require('express');
var router = express.Router();
var auth = require('../../auth/auth.service');
var genjouristController = require('./genjourist-controller');

router.get('/genjourist/:id', genjouristController.getGenjouristBygenjouristId);
router.get('/getJournalsByGenjouristId/:genjouristId', genjouristController.getJournalsByGenjouristId)
router.get('/getArticlesByGenjouristId/:id', genjouristController.getArticlesByGenjouristId);
router.get('/getQuotationsByGenjouristId/:id', genjouristController.getQuotationsByGenjouristId);


module.exports = router;
