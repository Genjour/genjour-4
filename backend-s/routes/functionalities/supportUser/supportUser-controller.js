const express = require('express');
const router = express.Router();
const User = require('../../../models/user');
const Support = require('../../../models/support');
const uniqid = require('uniqid');



//=============================================================================
//============================== SUPPORT Genjourist ===========================
//=============================================================================

exports.supportGenjourist = function (req, res) {
    const userId = req.params.userId;
    const supportId = req.params.supportId;

    let a = new Support({
        genjouristId: userId,
        supportId: supportId,
        sDate: Date()
    })

    Support.findSupporters(userId, supportId, (err, docs) => {
        if (err) throw err;
        if (docs) {
            Support.removeSupporters(userId, supportId, (err, docs) => {
                if (err) throw err;
                else {
                    res.json({
                        success: true,
                        msg: "user is pop"
                    });
                }
            })
        } else {

            Support.addSupporters(a, (err, docss) => {
                if (err) throw err;
                else {
                    res.json({
                        success: true,
                        msg: "user is pushed"
                    });
                }
            })
        }
    })
}




//=============================================================================
//============================== SUPPORTING LIST ==============================
//=============================================================================

exports.getSupportingList = function (req, res) {
    var userId = req.params.userid;
    User.findUser(userId, function (err, user) {
        if (err) throw err;
        if (!user) {
            return res.json({
                success: false,
                msg: 'genjourist id is not valid'
            });
        } else {
            Support.getSupporting(userId, (err, docs) => {
                if (err) throw err;
                else {
                    //console.log(docs);
                    return res.json(docs);
                }
            })
        }
    })
}



//=============================================================================
//============================== SUPPORTERS LIST ==============================
//=============================================================================

exports.getSupportersList = function (req, res) {
    var userId = req.params.userid;
    User.findUser(userId, function (err, user) {
        if (err) throw err;
        if (!user) {
            return res.json({
                success: false,
                msg: 'genjourist id is not valid'
            });
        } else {

            Support.getSupporters(userId, (err, docs) => {
                if (err) throw err;
                else {
                    //console.log(docs);
                    return res.json(docs);
                }
            });
        }
    });
};



//=============================================================================
//=============== Check supporting or not of Users (CheckStatus)===============
//=============================================================================

exports.checkSupportStatus = function (req, res) {
    var userId = req.params.userId;
    var genjouristId = req.params.genjouristId;
    Support.findSupporters(userId, genjouristId, (err, status) => {
        if (err) throw err;
        if (!status) res.json({
            success: false
        });
        else {
            res.json({
                success: true
            });
        }
    })
}