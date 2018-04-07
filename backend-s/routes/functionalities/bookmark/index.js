var express = require('express');
var router = express.Router();
var auth = require('../../../auth/auth.service');
var bookmarkController = require('./bookmark-controller');

router.get('/checkExistingBookmark/:journalId/:userId',bookmarkController.checkExistingBookmark);
router.post('/addBookmark/:journalId/:userId', bookmarkController.addBookmark);
router.get('/getBookmarkCount/:journalId', bookmarkController.getBookmarkCount);

module.exports = router;
