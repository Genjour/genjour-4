const express = require('express');
var app=express.Router();
const Journal = require('./../models/journal');
const SupportJournal = require('./../models/supportJournal');

// const Story=require('../models/userstory')
// const Like=require('../models/likes')
app.supportJournal = (io,T) => {
    const supportId = T.supportId;
    const journalId = T.journalId;

    let a = new SupportJournal({
        journalId    : journalId,
        supportId    : supportId,
        sDate        : Date()
    })

    Journal.findJournal(journalId, (err,journal)=>{
        if(err) throw err;
        else 
            {
                SupportJournal.findSupporters(journalId,supportId,(err,docs)=>{
                    if(err) throw err;
                    if(docs){
                        SupportJournal.removeSupporters(journalId,supportId, (err,docs)=>{
                            if(err) throw err;
                            else{
                                const result = {status:true, msg:"support"}    
                                //res.json({success:true,msg:"user is pop"});
                                SupportJournal.numberOfSupporters(journalId,(err,count)=>{
                                    if(err) throw err;
                                    else{
                                        console.log(count)
                                        io.emit('supportEvent', count);
                                    }
                                })
                            }
                        })
                    }else{
                        
                        SupportJournal.addSupporters(a, (err,docss)=>{
                            if(err) throw err;
                            else{
                                const result = {status:true, msg:"supporting"}
                                //res.json({success:true,msg:"user is pushed"});
                                SupportJournal.numberOfSupporters(journalId,(err,count)=>{
                                    if(err) throw err;
                                    else{
                                        console.log(count)
                                        io.emit('supportEvent', count);
                                    }
                                })
                            }
                        })
                    }
                })

            } 
})
    
  
  }


  module.exports=app