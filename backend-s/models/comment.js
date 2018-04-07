
var mongoose = require('mongoose');


var commentSchema = mongoose.Schema({

    id               : String,
    commentId        : String,
    genjouristId     : String,
    journalId        : String,
    refrenceId       : String,
    comment          : String,
    date             : String,
    status           : Boolean,

});

const Comment  = module.exports = mongoose.model('Comment',commentSchema);

module.exports.addComment = function(comment, callback){
    comment.save(callback);
} 


module.exports.findComment = function(journalId, callback){
    Comment.find({journalId:journalId}, callback).sort({$natural:-1});
}

module.exports.deleteComment = function(commentId, callback){
    Comment.remove({commentId:commentId},callback);
}

module.exports.updateComent = function(commentId,data,callback){
    Comment.findAndUpdate({commentId:commentId},data,callback);
}

module.exports.getCommentCount = function(journalId,callback){
    Comment.count({journalId:journalId},callback);
}



