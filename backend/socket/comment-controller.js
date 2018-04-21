const express = require('express');
var app=express.Router();
const Comment = require('./../models/comment');
const uniqid     = require('uniqid');

app.addComment = (io,T)=>{
    const commentId    =  T.commentId;
    const genjouristId =  T.genjouristId;
    const genjourist   =  T.genjourist;
    const journalId    =  T.journalId;
    const refrenceId   =  T.refrenceId;
    const comment      =  T.comment;

    const flag = new Comment( {
        commentId        : uniqid('gmplC'),
        genjouristId     : genjouristId,
        genjourist       : genjourist,
        journalId        : journalId,
        refrenceId       : refrenceId,
        comment          : comment,
        date             : Date(),
        status           : true,
    })

    Comment.addComment(flag,(err,status)=>{
        if(err) throw err;
        else{
            console.log(flag.commentId)
            Comment.getCommentById(flag.commentId, (err,doc)=>{
                if(err) throw err;
                else{
                    io.emit('commentAddEmit', doc);
                }
            })
            
            
        }
    });

}

module.exports=app