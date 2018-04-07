'use strict'
var express = require('express')
const path = require('path')
var fs = require('fs')
const Story=require('../../models/userstory')
const User = require('../../models/user');
exports.uploadStoryImage = function(req, res) {
    var role = "storyImages"
    var username = req.user.username
    var uploadPath = 'uploads'
    var pathDir = 'uploads'
    var mask = '0777'
    if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, mask, function(err) {
            console.log(err)
        })
    }
    uploadPath = path.join(uploadPath, role)
    if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, mask, function(err) {
            console.log(err)
        })
    }
    uploadPath = path.join(uploadPath, username)
    if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, mask, function(err) {
            console.log(err)
        })
    }
    var image = req.files.photo[0]
   
    var newName = image.originalname+ '-'+Date.now()
    var ext = path.extname(newName)
    
    var baseName = path.basename(newName, ext)
    var filePath = path.join(uploadPath.toString(), newName.toString())
    fs.rename(
        image.path,
        filePath,
        function(error) {
            if (error) {
                return validationError(res, error)
            }
            var imagePath = role + '/' + username + '/' + newName
            
            res.json({ success: true, msg: imagePath })
        }
    )
}
exports.uploadUserImage = function(req, res) {
    var role = "userImages"
    var username = req.user.username
    var uploadPath = 'uploads'
    var pathDir = 'uploads'
    var mask = '0777'
    if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, mask, function(err) {
            console.log(err)
        })
    }
    uploadPath = path.join(uploadPath, role)
    if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, mask, function(err) {
            console.log(err)
        })
    }
    uploadPath = path.join(uploadPath, username)
    if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, mask, function(err) {
            console.log(err)
        })
    }
    var image = req.files.photo[0]
   
    var newName = image.originalname+ '-'+Date.now()
    var ext = path.extname(newName)
    var baseName = path.basename(newName, ext)
    var filePath = path.join(uploadPath.toString(), newName.toString())
    fs.rename(
        image.path,
        filePath,
        function(error) {
            if (error) {
                return validationError(res, error)
            }
            var imagePath = role + '/' + username + '/' + newName
            User.updateImage(req.user._id,imagePath, (err, user) => {
   
                if(err){
                  res.json({success: false})
                }
                 else{
                  res.json({success: true,msg:imagePath})
                 }
                })
        }
    )
}
