const express = require('express');
const router  = express.Router();
const uniqid  = require('uniqid');
const Journal = require('../../models/journal');


//=============================================================================
//=========================== GET ALL JOURNALS ================================
//=============================================================================

exports.getAllJournals = function(req,res){

    Journal.getJournal((err, journal) => {
        if (err) throw err;
        res.json(journal);
    });
}


//=============================================================================
//========================== SINGLE JOURNAL BY ID =============================
//=============================================================================

exports.getJournalById = function(req,res){
    const journalId=req.params.id;
    Journal.findJournalByIdTrue(journalId, function(err, journal) {
        if (err) throw err;
        if(!journal){res.json({success:false, m0sg:"Cannot find journal"})}
        else{
          res.json(journal[0]);
        }
    });
}


//=============================================================================
//=============================== GET DRAFT JOURNAL ===========================
//=============================================================================

exports.getDraftJournal = function(req,res){
    Journal.findJournal(req.params.journalId, (err,data)=>{
        if(err) throw err;
        if(!data){
          res.json({success:false, msg:"No data found"});
        }else{
          res.json(data);
        }
      });
}



//=============================================================================
//========================== DELETE JOURNAL ===================================
//=============================================================================

exports.deleteJournal = function(req,res){
    Journal.deleteJournal(req.params.journalId, (err,done)=>{
        if(err) throw err;
        if(!done){ 
            res.json({success:false, msg:"Cannot delete"});
        }else{
            res.json({success:true, msg:"deleted"});
        }
    });
}


//=============================================================================
//========================== UPDATE JOURNAL ===================================
//=============================================================================
  
exports.updateJournal = function(req,res){
    const flag = {
        category         : req.body.category,
        title            : req.body.title,
        content          : req.body.content,
        tags             : req.body.tags,
        status           : req.body.status,
  }

  Journal.findJournal(req.params.journalId, (err,article)=>{
    if(err) throw err;
    if(!article){
      res.json({success:false, msg:'cannot find this article which you want to update'});
    }else{
      Journal.updateJournal(req.params.journalId, flag, (err,draftArticle)=>{
        if(err) throw err;
        if(!draftArticle){
          res.json({success:false, msg:'cannot update'});
        }else{
          res.json({success:true, msg:'updation successful'});
        }
      });
    }
  });
}





//=============================================================================
//========================== JOURNALS BY CATEGORY =============================
//=============================================================================

exports.journalsByCategory = function(req,res){
    Journal.findJournalByCategory(req.params.category, (err,data)=>{
        if(err) throw err;
        if(!data){
          res.json({success:false, msg:"No data found"});
        }else{
          res.json(data);
        }
      });
}



