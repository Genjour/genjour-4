
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

module.exports.checkExistingBookmark = function(journalId, userId, callback){
    Bookmark.findOne({journalId:journalId, genjouristId:userId},callback)
}

module.exports.deleteBookmark = function(journalId, userId, callback){
    Bookmark.remove({journalId:journalId, genjouristId:userId},callback);
}


module.exports.findBookmarksByGenjouristId = function(userId, callback){
    Bookmark.find({genjouristId:userId}, callback).sort({$bookmarkDate:-1});
}

module.exports.getBookmarkCount = function(journalId,callback){
    Bookmark.count({journalId:journalId},callback);
}



