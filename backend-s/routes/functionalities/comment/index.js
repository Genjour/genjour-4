var express = require('express');
var router = express.Router();
var auth = require('../../../auth/auth.service');
var commentController = require('./comment-controller');

router.get('/getCommentByJournalId/:journalId', commentController.getCommentByJournalId);
router.post('/addComment', commentController.addComment);
router.put('/updateComment/:commentId', commentController.updateComment);
router.delete('/deleteComment/:commentId', commentController.deleteComment);
router.get('/getCommentCount/:journalId',commentController.getCommentCount);

module.exports = router;