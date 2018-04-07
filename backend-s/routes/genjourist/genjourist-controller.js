const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const Journal = require('../../models/journal');

exports.getGenjouristBygenjouristId = function(req,res){
    User.findOne({
        'genjouristId': req.params.id
    }, function (err, genjourist) {
        if (err) throw err;
        res.json(genjourist);
    });
};



//=============================================================================
//============================== JOURNALS BY GENJOURIST =======================
//=============================================================================

exports.getJournalsByGenjouristId = function(req,res){
    Journal.getJournalByGenjourist(req.params.genjouristId, function (err, journals) {
        if (err) throw err;
        else {
            journals = journals.filter(x => x.status == true)
            res.json(journals);
        }
    });
};


exports.getArticlesByGenjouristId = function(req,res){
    Journal.find({'genjouristId': req.params.id}, function (err, genjouristArticles) {
        if (err) throw err;
        else {
            genjouristArticles = genjouristArticles.filter(x => x.type == 1);
            res.json(genjouristArticles);
        }

    });
};


exports.getQuotationsByGenjouristId = function(req,res){
    Journal.find({
        'genjouristId': req.params.id
    }, function (err, genjouristQuotation) {
        if (err) throw err;
        else {
            genjouristQuotation = genjouristQuotation.filter(x => x.type == 0);
            res.json(genjouristQuotation);
        }

    });
};



