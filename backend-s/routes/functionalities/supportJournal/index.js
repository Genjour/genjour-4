var express = require('express');
var router = express.Router();
var auth = require('../../../auth/auth.service');
var supportJournalController = require('./supportJournal-controller');

router.post('/supportJournal/:journalId/:supportId',supportJournalController.supportJournal);
router.get('/getSupportersList/:journalId', supportJournalController.getSupportersList);
router.get('/getSupportersCount/:journalId', supportJournalController.getSupportersCount)

module.exports = router;
