const express = require('express');
const router = express.Router();
const User = require('../models/user');
const uniqid     = require('uniqid');
const Journal = require('../models/journal');
const Comment = require('../models/comment');
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

router.put('update/comment/:commentId', (req,res)=>{
    Comment.updateComment(req.params.commentId,data,(err,status)=>{
        if(err) throw err;
        else{
            res.json({success:true, msg:"successfully updated"})
        }

    }); 
});

router.post('delete/comment/:commentId', (req,res)=>{
    Comment.deleteComment(req.params.commentId,(err,status)=>{
        if(err) throw err;
        else{
            res.json({success:true, msg:"comment has been deleted"});
        }
    });
});

module.exports = router;