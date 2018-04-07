const express    = require('express');
const router     = express.Router();
const Journal    = require('../../../models/journal');
const SupportJournal    = require('../../../models/supportJournal');
const uniqueId   = require('unique-id-generator');


//=============================================================================
//================================= Bookmark ==================================
//=============================================================================

exports.checkExistingBookmark = function(req,res){
    var userId = req.params.userId;
    var journalId = req.params.journalId;

    Bookmark.checkExistingBookmark(journalId, userId, (err, status) => {
        if (err) throw err;
        if (!status) {
            res.json({
                status: false
            });
        } else {
            res.json({
                status: true
            });
        }
    });

};

exports.addBookmark = function(req,res){
    var userId = req.body.genjouristId;
    var journalId = req.body.journalId;

    let newBookmark = new Bookmark({
        bookmarkId: uniqid('b7d4s5wa4'),
        genjouristId: req.body.genjouristId,
        journalId: req.body.journalId,
        bookmarkDate: Date(),
        status: true,
    });

    Bookmark.checkExistingBookmark(journalId, userId, function (err, docs) {
        if (err) throw err;
        if (!docs) {
            Bookmark.addBookmark(newBookmark, function (err, docss) {
                if (err) throw err;
                else {
                    res.json({
                        success: true,
                        msg: "Bookmark saved"
                    })
                }
            })

        } else {
            Bookmark.deleteBookmark(journalId, userId, function (err, docs){
                if (err) throw err;
                else {
                    res.json({
                        success: true,
                        msg: "Bookmark deleted"
                    })
                }
            })

        }
    })
}

exports.getBookmarkCount  =  function(req,res){
    Bookmark.getBookmarkCount(req.params.journalId, function(err, count) {
        if(err) throw err;
        res.json(count);
    });
}

