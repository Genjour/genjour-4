var express = require('express');
var router = express.Router();
var auth = require('../../auth/auth.service');
var articleController = require('./article-controller');
var quotationController = require('./quotation-controller');
var journalController = require('./journal-controller');


router.post('/add/article', articleController.addArticle);
router.get('/articles/:category', articleController.articlesByCategory);
router.get('/getAllArticles', articleController.getArticles);

router.post('/add/quotation', quotationController.addQuotation);
router.get('/quotations', quotationController.getQuotations);
router.get('/quotations/:category', quotationController.findQuotationsByCategory);

router.get('/getAllJournals',journalController.getAllJournals);
router.get('/getJournalById/:id', journalController.getJournalById);
router.get('/edit/:journalId', journalController.getDraftJournal);
router.delete('/delete/:journalId', journalController.deleteJournal);
router.put('/updateJournal/:journalId', journalController.updateJournal);
router.get('/journalsByCategory/:category', journalController.journalsByCategory);

module.exports = router;