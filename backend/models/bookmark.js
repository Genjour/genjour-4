
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

module.exports.getBookmarkCount = function(journalId,userId,callback){
    Bookmark.count({journalId:journalId, genjouristId:userId},callback);
}

module.exports.getBookmarkByGenjouristId = function(userId,callback){
    Bookmark.aggregate([
        {
            $match: {genjouristId:userId}
        },
        {
            $lookup:{
                from: "journals",
                localField: "journalId",    // field in the orders collection
                foreignField: "journalId",  // field in the items collection
                as: "details"
            }
        },
        {
            $unwind:"$details"
        },
        { $project: { 
             
            genjouristId: "$genjouristId",
            journalId:"$details.journalId",         
            content:"$details.content",
            category:"$details.category", 
            imgUrl:"$details.imgUrl",
            status:"$details.status",
            type:"$details.type",
            date:"$details.date",
            title:"$details.title",
            tags:"#details.tags",

            } 
       }
    ], callback)
}
