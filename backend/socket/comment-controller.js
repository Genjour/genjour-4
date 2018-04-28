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
                    console.log(doc)
                    io.emit('commentAddEmit', doc);
                    Comment.getCommentCount(journalId,(err,count)=>{
        
                        if(err) throw err;
                        if(!count){
                            let result = {status:false, msg:"Problem in counting the comments"};
                            io.emit('commentCountEmit',result);
                        }
                        else{
                            console.log(count)
                            io.emit('commentCountEmit',count);
                        }
                    });
                }
            })
            
            
        }
    });

}

app.getCommentCount = function(io,T){
    const journalId = T;

    Comment.getCommentCount(journalId,(err,count)=>{
        
        if(err) throw err;
        if(!count){
            let result = {status:false, msg:"Problem in counting the comments"};
            io.emit('commentCountEmit',result);
        }
        else{
            io.emit('commentCountEmit',count);
        }
    });
}

module.exports=app