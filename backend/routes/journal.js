const express = require('express');
const router = express.Router();
const User = require('../models/user');
const uniqid     = require('uniqid');
const Journal = require('../models/journal');
const passport = require('passport');
const jwt = require('jsonwebtoken');


//=============================================================================
//=========================== GET ALL JOURNALS ================================
//=============================================================================

router.get('/journal',(req,res)=>{

    Journal.getJournal((err, journal) => {
        if (err) throw err;
        res.json(journal);
    });

})

//=============================================================================
//========================== SINGLE JOURNAL BY ID =============================
//=============================================================================


router.get('/journal/:id',function(req,res){
    Journal.findOne({ 'journalId' : req.params.id }, function(err, article) {
        if (err) throw err;
        res.json(article);
    });
});

//=============================================================================
//============================== FEEDS JOURNAL ================================
//=============================================================================

router.get('/journals/feeds/:userId', function(req,res){
    const userId = req.params.userId;
    
    User.findUser(userId, (err,user)=>{
        if(err) throw err;
        if(!user){
            res.json({success:false, msg:"no such user"});
        }else{
            console.log(user.supporting.length);
            if(user.supporting.length==0){
                res.json({msg:'support them'});
                
            }else{

                var supporting_array = [];
                console.log(user.supporting);
                for(var i=0; i<user.supporting.length; i++){
                    //console.log(user.supporting[i].genjouristId);
                    supporting_array.push(user.supporting[i].genjouristId);
                }

                
                //console.log(supporting_array);
                Journal.feedsArticle(supporting_array, function(err,docs){
                    if(err) throw err;
                    res.json(docs);
                });
            }
        }
    });


});


//=============================================================================
//=============================== GET DRAFT JOURNAL ===========================
//=============================================================================

router.get('/edit/journal/:journalId', (req,res)=>{
    Journal.findJournal(req.params.journalId, (err,data)=>{
      if(err) throw err;
      if(!data){
        res.json({success:false, msg:"No data found"});
      }else{
        res.json(data);
      }
    });
  });

//=============================================================================
//========================== DELETE JOURNAL ===================================
//=============================================================================

  router.delete('/delete/journal/:journalId', function(req,res){
    Journal.deleteJournal(req.params.journalId, (err,done)=>{
        if(err) throw err;
        if(!done){ 
            res.json({success:false, msg:"Cannot delete"});
        }else{
            res.json({success:true, msg:"deleted"});
        }
    });
  });

//=============================================================================
//========================== UPDATE JOURNAL ===================================
//=============================================================================
  
  router.put('/update/journal/:journalId', function(req,res){
  
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
  });



//=============================================================================
//========================== JOURNALS BY CATEGORY =============================
//=============================================================================

router.get('/journals/:category', (req,res)=>{
    Journal.findJournalByCategory(req.params.category, (err,data)=>{
      if(err) throw err;
      if(!data){
        res.json({success:false, msg:"No data found"});
      }else{
        res.json(data);
      }
    });
  });



module.exports = router;