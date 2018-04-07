const express = require('express');
const router = express.Router();
const uniqid     = require('uniqid');
const Reply = require('../../../models/reply');

exports.getRepliesByParentCommentId = function(req,res){
    Reply.findReply(req.params.parentCommentId,(err,replies)=>{
        if(err) throw err;
        if(!replies){res.json({success:false, msg:"No replies"});}
        else{
            res.json(replies);
        }
    })
}

exports.addReply = function(req,res){
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
}

exports.deleteReply = function(req,res){
    Reply.deleteReply(req.params.replyId,(err,status)=>{
        if(err) throw err;
        else{
            res.json({success:true, msg:"reply has been deleted"});
        }
    });
};

exports.getRepliesCount = function(req,res){
    Reply.getRepliesCount(req.params.journalId, (err,count)=>{
        if(err) throw err;
        if(!count){
            res.json({status:false, msg:"Problem in counting the comments"});
        }
        else{
            res.json(count);
        }
    });
};

