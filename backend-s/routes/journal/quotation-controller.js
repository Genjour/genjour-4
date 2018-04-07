const express = require('express');
const router = express.Router();
const Journal = require('../../models/journal');
const uniqid     = require('uniqid');


//=============================================================================
//============================== ADD QUOTAION ====-============================
//=============================================================================

exports.addQuotation = function(req,res){
    let newQuotation = new Journal({
        journalId   : uniqid(),
        genjouristId  : req.user.genjouristId,
        category      : req.body.category,
        content       : req.body.quote,
        tags          : req.body.tags,
        date          : Date(),
        status        : req.body.status,
        type          : 0
  
    });
  
    Journal.addJournal(newQuotation, (err,Quotation)=>{
    if(err){
      res.json({success:false, msg:'Fail to add Quotation'});
    } else {
      res.json({success:true, msg:'Quotation saved'});
    }
  });
};

exports.getQuotations = function (req,res){
    Journal.getQuotations((err,quotes)=>{
        if(err) throw err;
        if(!quotes){
          res.json({success:false, msg:'no quotes'});
        }else{
          res.json(quotes);
        }
      })
}


exports.findQuotationsByCategory = function(req,res){
    Journal.findQuotationsByCategory(req.params.category, (err,data)=>{
        if(err) throw err;
        if(!data){
          res.json({success:false, msg:"No data found"});
        }else{
          res.json(data);
        }
      })
}





