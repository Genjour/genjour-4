const express = require('express');
var app=express.Router();
const Journal = require('./../models/journal');
const SupportJournal = require('./../models/supportJournal');
const SupportGenjourist =  require('./../models/support');

app.supportJournal = (io, T) => {
        const supportId = T.supportId;
        const journalId = T.journalId;

        let a = new SupportJournal({
            journalId: journalId,
            supportId: supportId,
            sDate: Date()
        })

        Journal.findJournal(journalId, (err, journal) => {
            if (err) throw err;
            else {
                SupportJournal.findSupporters(journalId, supportId, (err, docs) => {
                    if (err) throw err;
                    if (docs) {
                        SupportJournal.removeSupporters(journalId, supportId, (err, docs) => {
                            if (err) throw err;
                            else {
                                const result = {
                                    status: true,
                                    msg: "support"
                                }
                                //res.json({success:true,msg:"user is pop"});
                                SupportJournal.numberOfSupporters(journalId, (err, count) => {
                                    if (err) throw err;
                                    else {
                                        console.log(count)
                                        io.emit('supportEvent', count);
                                    }
                                })
                            }
                        })
                    } else {

                        SupportJournal.addSupporters(a, (err, docss) => {
                            if (err) throw err;
                            else {
                                const result = {
                                    status: true,
                                    msg: "supporting"
                                }
                                //res.json({success:true,msg:"user is pushed"});
                                SupportJournal.numberOfSupporters(journalId, (err, count) => {
                                    if (err) throw err;
                                    else {
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


app.supportGenjourist = (io,T) => {
    const userId = T.userId;
    const supportId = T.supportId;

    let a = new SupportGenjourist({
        genjouristId: userId,
        supportId: supportId,
        sDate: Date()
    })

    SupportGenjourist.findSupporters(userId, supportId, (err, docs) => {
        if (err) throw err;
        if (docs) {
            SupportGenjourist.removeSupporters(userId, supportId, (err, docs) => {
                if (err) throw err;
                else {
                    const result = {
                        success: false,
                        msg: "user is pop"
                    };
                    io.emit('supportGenjouristSocket',result);

                    SupportGenjourist.getSupportersCount(supportId, (err,count)=>{
                        if(err) throw err;
                        else{
                            io.emit('SupportersCountEmit',count);
                        }
                    });
                    
                    SupportGenjourist.getSupportingCount(supportId, (err,count)=>{
                        if(err) throw err;
                        else{
                            io.emit('SupportingCountEmit',count);
                        }
                    });
                    
                }
            })
        } else {

            SupportGenjourist.addSupporters(a, (err, docss) => {
                if (err) throw err;
                else {
                    const result = {
                        success: true,
                        msg: "user is pushed"
                    };
                    io.emit('supportGenjouristSocket',result);

                    SupportGenjourist.getSupportersCount(supportId, (err,count)=>{
                        if(err) throw err;
                        else{
                            io.emit('SupportersCountEmit',count);
                        }
                    });
                    
                    SupportGenjourist.getSupportingCount(supportId, (err,count)=>{
                        if(err) throw err;
                        else{
                            io.emit('SupportingCountEmit',count);
                        }
                    });
                }
            });
        }
    });
};


  module.exports=app;