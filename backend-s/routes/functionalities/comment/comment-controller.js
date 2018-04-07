const express = require('express');
const router = express.Router();
const uniqid     = require('uniqid');
const Comment = require('../../../models/comment');


exports.getCommentByJournalId = function(req,res){
    Comment.findComment(req.params.journalId,(err,comments)=>{
        if(err) throw err;
        if(!comments){res.json({success:false, msg:"No comments till now"});}
        else{
            res.json(comments);
        }
    });
}

exports.addComment = function(req,res){
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
};

exports.updateComment = function(req,res){
    Comment.updateComment(req.params.commentId,data,(err,status)=>{
        if(err) throw err;
        else{
            res.json({success:true, msg:"successfully updated"})
        }

    }); 
}

exports.deleteComment = function(req,res){
    Comment.deleteComment(req.params.commentId,(err,status)=>{
        if(err) throw err;
        else{
            res.json({success:true, msg:"comment has been deleted"});
        }
    });
}

exports.getCommentCount = function(req,res){
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
}
