
var mongoose = require('mongoose');


var replySchema = mongoose.Schema({

    id               : String,
    replyId          : String,
    genjouristId     : String,
    genjourist       : String,
    journalId        : String,
    parentCommentId  : String,
    reply            : String,
    date             : String,
    status           : Boolean,

});

const Reply  = module.exports = mongoose.model('Reply',replySchema);

module.exports.addReply = function(reply, callback){
    reply.save(callback);
} 


module.exports.findReply = function(parentCommentId, callback){
    Reply.find({parentCommentId:parentCommentId}, callback).sort({date:-1});
}

module.exports.deleteReply = function(replyId, callback){
    Reply.remove({replyId:replyId},callback);
}

module.exports.updateReply = function(replyId,data,callback){
    Reply.findAndUpdate({replyId:replyId},data,callback);
}




