// load the things we need
var mongoose = require('mongoose');


var supportJournalSchema = mongoose.Schema({

        journalId        : String,
        supportId        : String,
        sDate            : String,

});

const SupportJournal = module.exports = mongoose.model('supportJournal', supportJournalSchema);

module.exports.addSupporters = function(newData, callback){
    newData.save(callback);
}

module.exports.findSupporters = function(userId, supportId, callback){
    SupportJournal.findOne({journalId:userId,supportId:supportId},callback)
}

module.exports.removeSupporters = function(userId, supportId, callback){
    SupportJournal.remove({journalId:userId,supportId:supportId},callback)
}

//==========================================================================================
//================================== GET SUPPORTERS OF JOURNALS ============================
//==========================================================================================

//CURRENTLY NOT IN USE this api

module.exports.getSupporters = function(journalId, callback){

    SupportJournal.aggregate([
        {
            $match: { "journalId": journalId }
        },
        {
            $lookup:{
                from:"users",
                localField:"supportId",
                foreignField:"genjouristId",
                as:"details"
            }
        },
        {
            $unwind:"$details"
        },
        { $project : 

            { 
                createdOn:"$details.createdOn",
                dob:"$details.dob",
                email:"$details.email",
                gender:"$details.gender",
                profileImg:"$details.profileImg",
                genjouristId : "$supportId",
                _id:0
            } 
        }
    ], callback)
}


module.exports.numberOfSupporters = function(journalId,callback){
    SupportJournal.count({journalId:journalId},callback);
}

module.exports.checkJournalSupportstatus = function(journalId,userId,callback){
    SupportJournal.count({journalId:journalId, supportId:userId},callback);
}