
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
    Comment.aggregate([
        {
            $match:{journalId:journalId}
        },
        {
            $lookup:{
                        from:"users",
                        localField:"genjouristId",
                        foreignField: "genjouristId",  // field in the items collection
                        as: "details"
                    }
        },
        {
            $unwind:"$details"
        },
        {
            $project: { 
                 
                 genjouristId: "$genjouristId",
                 commentId:1,
                 comment:1,
                 date:1,
                 refrenceId:1,
                 name:"$details.name",
                 username:"$details.username",
                 createdOn:"$details.createdOn",
                 dob:"$details.dob",
                 email:"$details.email",
                 gender:"$details.gender",
                 profileImg:"$details.profileImg"                   
                 } 
        },
        {
            $sort:{
                "date":-1
            }
        }
    ],callback);
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


module.exports.getCommentById = function(commentId,callback){
    Comment.aggregate([
        {
            $match:{commentId:commentId}
        },
        {
            $lookup:{
                        from:"users",
                        localField:"genjouristId",
                        foreignField: "genjouristId",  // field in the items collection
                        as: "details"
                    }
        },
        {
            $unwind:"$details"
        },
        {
            $project: { 
                 
                 genjouristId: "$genjouristId",
                 commentId:1,
                 comment:1,
                 date:1,
                 refrenceId:1,
                 name:"$details.name",
                 username:"$details.username",
                 createdOn:"$details.createdOn",
                 dob:"$details.dob",
                 email:"$details.email",
                 gender:"$details.gender",
                 profileImg:"$details.profileImg"                   
                 } 
        },
        {
            $sort:{
                "date":-1
            }
        }
    ],callback)

}
