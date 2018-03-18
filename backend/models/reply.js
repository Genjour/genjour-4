
var mongoose = require('mongoose');


var replySchema = mongoose.Schema({

    id               : String,
    commentId        : String,
    genjouristId     : String,
    genjourist       : String,
    journalId        : String,
    refrenceId       : String,
    comment          : String,
    date             : String,
    status           : Boolean,

});

const Reply  = module.exports = mongoose.model('Reply',replySchema);

module.exports.addComment = function(reply, callback){
    reply.save(callback);
} 


module.exports.findComment = function(journalId, callback){
    Reply.find({journalId:journalId}, callback).sort({date:-1});
}

module.exports.deleteComment = function(commentId, callback){
    Reply.remove({commentId:commentId},callback);
}

module.exports.updateComent = function(commentId,data,callback){
    Reply.findAndUpdate({commentId:commentId},data,callback);
}




