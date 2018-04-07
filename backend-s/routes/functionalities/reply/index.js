var express = require('express');
var router = express.Router();
var auth = require('../../../auth/auth.service');
var replyController = require('./reply-controller');

router.get('/getRepliesByParentCommentId/:parentCommentId', replyController.getRepliesByParentCommentId)
router.post('/addReply', replyController.addReply);
router.delete('/deleteReply/:replyId', replyController.deleteReply);
router.get('/getRepliesCount/:journalId', replyController.getRepliesCount);

module.exports = router;