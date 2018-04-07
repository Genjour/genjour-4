const express = require('express');
const router = express.Router();
const User = require('../models/user');
const uniqid     = require('uniqid');
const Journal = require('../models/journal');
const Comment = require('../models/comment');
const Reply = require('../models/reply');
const passport = require('passport');
const jwt = require('jsonwebtoken');


router.get('/comments/:journalId', (req,res)=>{
    Comment.findComment(req.params.journalId,(err,comments)=>{
        if(err) throw err;
        if(!comments){res.json({success:false, msg:"No comments till now"});}
        else{
            res.json(comments);
        }
    });
});

router.post('/add/comment',(req,res)=>{
    const flag = new Comment( {
        commentId        : uniqid('gmplC'),
        genjouristId     : req.body.genjouristId,
        genjourist       : req.body.genjourist,
        journalId        : req.body.journalId,
        refrenceId       : req.body.refrenceId,
        comment          : req.body.comment,
        date             : Date(),
        status           : true,
    })
    Comment.addComment(flag,(err,status)=>{
        if(err) throw err;
        else{
            res.json({success:true, msg:"Comment added"});
        }
    });
});

router.put('/update/comment/:commentId', (req,res)=>{
    Comment.updateComment(req.params.commentId,data,(err,status)=>{
        if(err) throw err;
        else{
            res.json({success:true, msg:"successfully updated"})
        }

    }); 
});

router.delete('/delete/comment/:commentId', (req,res)=>{
    Comment.deleteComment(req.params.commentId,(err,status)=>{
        if(err) throw err;
        else{
            res.json({success:true, msg:"comment has been deleted"});
        }
    });
});


router.get('/replies/:parentCommentId', (req,res)=>{
    Reply.findReply(req.params.parentCommentId,(err,replies)=>{
        if(err) throw err;
        if(!replies){res.json({success:false, msg:"No replies"});}
        else{
            res.json(replies);
        }
    })
})

router.post('/add/reply',(req,res)=>{
    const flag = new Reply({

    replyId          : uniqid('gmplc'),
    genjouristId     : req.body.genjouristId,
    journalId        : req.body.journalId,
    parentCommentId  : req.body.parentCommentId,
    reply            : req.body.reply,
    date             : Date(),
    status           : true,
    })
    Reply.addReply(flag,(err,status)=>{
        if(err) throw err;
        else{
            res.json({success:true, msg:"successfully reply"})
        }
    })
})

router.delete('/delete/reply/:replyId', (req,res)=>{
    Comment.deleteComment(req.params.replyId,(err,status)=>{
        if(err) throw err;
        else{
            res.json({success:true, msg:"reply has been deleted"});
        }
    });
});

router.get('/comment/count/journal/:journalId',(req,res)=>{
    console.log(req.params.journalId)
    Comment.getCommentCount(req.params.journalId,(err,count)=>{
        
        if(err) throw err;
        if(!count){
            res.json({status:false, msg:"Problem in counting the comments"});
        }
        else{
            res.json(count);
        }
    })
})

module.exports = router;