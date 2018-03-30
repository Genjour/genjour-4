
var mongoose = require('mongoose');


var bookmarkSchema = mongoose.Schema({

    id               : String,
    bookmarkId       : String,
    genjouristId     : String,
    journalId        : String,
    bookmarkDate     : String,
    status           : Boolean,

});

const Bookmark  = module.exports = mongoose.model('Bookmark',bookmarkSchema);

module.exports.addBookmark = function(bookmark, callback){
    bookmark.save(callback);
} 

module.exports.deleteBookmark = function(journalId, userId, callback){
    Comment.remove({journalId:journalId, genjouristId:userId},callback);
}

module.exports.findComment = function(journalId, callback){
    Comment.find({journalId:journalId}, callback).sort({$natural:-1});
}


module.exports.updateComent = function(commentId,data,callback){
    Comment.findAndUpdate({commentId:commentId},data,callback);
}

module.exports.getCommentCount = function(journalId,callback){
    Comment.count({journalId:journalId},callback);
}



