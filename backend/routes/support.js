const express    = require('express');
const router     = express.Router();
const passport   = require('passport');
const User       = require('../models/user');
const Journal    = require('../models/journal');
const SupportJournal    = require('../models/supportJournal');
const jwt        = require('jsonwebtoken');
const config     = require('../config/database');
const uniqueId   = require('unique-id-generator');


//=============================================================================
//============================== SUPPORT JOURNAL ==============================
//=============================================================================

    router.post('/support/journal/:journalId/:supportId',function(req,res) {
        const journalId = req.params.journalId;
        const supportId = req.params.supportId;
        console.log(journalId);

        let a = new SupportJournal({
            journalId    : journalId,
            supportId    : supportId,
            sDate        : Date()
        })

        Journal.findJournal(journalId, (err,journal)=>{
            if(err) throw err;
            if(!journal){
                return res.json({success:false, msg:"Journal not found"});
            }
            else 
                {
                    SupportJournal.findSupporters(journalId,supportId,(err,docs)=>{
                        if(err) throw err;
                        if(docs){
                            SupportJournal.removeSupporters(journalId,supportId, (err,docs)=>{
                                if(err) throw err;
                                else{
                                    res.json({success:true,msg:"user is pop"});
                                }
                            })
                        }else{
                            
                            SupportJournal.addSupporters(a, (err,docss)=>{
                                if(err) throw err;
                                else{
                                    res.json({success:true,msg:"user is pushed"});
                                }
                            })
                        }
                    })
    
                } 
    })

    
    });


//=============================================================================
//============================ SUPPORTERS LIST OF JOURNAL =====================
//=============================================================================

router.get('/journal/supportersList/:journalId', function(req,res){
    var journalId = req.params.journalId;

        SupportJournal.getSupporters(journalId, (err,docs)=>{
            if (err) throw err;
            if(!docs){
                res.json({success:false, msg:"cannot find"})
            }
            else{
                //console.log(docs);
                return res.json(docs);
            }
        })
            

    });



//================================================================================================
//-------------------------------- SUPPORTERS COUNT ON JOURNAL -----------------------------------
//================================================================================================

router.get('/getSupportersCount/journal/:journalId',function(req,res){
    const journalId = req.params.journalId;
    const genjouristId = req.params.genjouristId;

    Journal.findJournal(journalId, (err,journal)=>{
        if(err) throw err;
        if(!journal){
            return res.json({success:false, msg:"Journal not found"});
        }
        else {
            SupportJournal.numberOfSupporters(journalId, (err,doc)=>{
                if(err) throw err;
                if(!doc){
                    res.json(0);
                }
                else{
                    res.json(doc);
                }
            })
        }
    })
                

    })

    router.post('/checkJournalSupportstatus',(req,res)=>{
        const journalId = req.body.journalId;
        const supportId = req.body.currentId;

        SupportJournal.checkJournalSupportstatus(journalId, supportId, (err,status)=>{
            if(err) throw err;
            if(!status){
                res.json({success:false});
            }else{
                res.json({success:true});
            }
        });
    });


module.exports = router;