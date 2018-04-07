const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Journal = require('../models/journal');
const Support = require('../models/support');
const Bookmark = require('../models/bookmark');
const uniqid = require('uniqid');

router.get('/genjourist/:id', function (req, res) {
    User.findOne({
        'genjouristId': req.params.id
    }, function (err, genjourist) {
        if (err) throw err;
        res.json(genjourist);
    });
});


//=============================================================================
//============================== JOURNALS BY GENJOURIST =======================
//=============================================================================

router.get('/genjourist/journals/:userId', function (req, res) {
    Journal.getJournalByGenjourist(req.params.userId, function (err, journals) {
        if (err) throw err;
        else {

            res.json(journals);
        }

    });
});

router.get('/genjourist/getGenjouristJournals/journals/:genjouristId', function (req, res) {
    Journal.getJournalByGenjourist(req.params.genjouristId, function (err, journals) {
        if (err) throw err;
        else {
            journals = journals.filter(x => x.status == true)
            res.json(journals);
        }
    })
})

router.get('/genjourist/article/:id', function (req, res) {
    Journal.find({
        'genjouristId': req.params.id
    }, function (err, genjouristArticles) {
        if (err) throw err;
        else {
            genjouristArticles = genjouristArticles.filter(x => x.type == 1);
            res.json(genjouristArticles);
        }

    });
});


router.get('/genjourist/quotation/:id', function (req, res) {
    Journal.find({
        'genjouristId': req.params.id
    }, function (err, genjouristQuotation) {
        if (err) throw err;
        else {
            genjouristQuotation = genjouristQuotation.filter(x => x.type == 0);
            res.json(genjouristQuotation);
        }

    });
});

//=============================================================================
//============================== SUPPORT Genjourist ===========================
//=============================================================================

router.post('/support/genjourist/:userId/:supportId', function (req, res) {
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

})


//=============================================================================
//============================== SUPPORTING LIST ==============================
//=============================================================================

router.get('/supportingList/:userid', function (req, res) {
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
});

//=============================================================================
//============================== SUPPORTERS LIST ==============================
//=============================================================================

router.get('/supportersList/:userid', function (req, res) {
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
            })
        }
    })
});

//=============================================================================
//============================== Recommended Users ============================
//=============================================================================

router.get('/recommended/users/:userid', (req, res) => {
    var userId = req.params.userid;
    User.findUser(userId, (err, user) => {
        if (err) throw err;
        if (!user) {
            res.json({
                success: false,
                msg: 'Sorry user not found'
            });
        } else {
            res.json()
        }
    })
})


//=============================================================================
//=============== Check supporting or not of Users (CheckStatus)===============
//=============================================================================

router.get('/checkSupportStatus/:userId/:genjouristId', (req, res) => {
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
})


//=============================================================================
//================================= Bookmark ==================================
//=============================================================================

router.get('/bookmark/status/journal/:journalId/:userId', (req, res) => {

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
    })

})


router.post('/bookmark/journal', function (req, res) {
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


});

router.get('/bookmark/journal/count/:journalId',function (req, res) {
    Bookmark.getBookmarkCount(req.params.journalId, function(err, count) {
        if(err) throw err;
        res.json(count);
    });
});

module.exports = router;