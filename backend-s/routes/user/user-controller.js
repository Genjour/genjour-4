'use strict'
const config = require('../../config/local');
const User = require('../../models/user');
const bluebird = require('bluebird');
const crypto = bluebird.promisifyAll(require('crypto'));
var async = require('async');
const bcrypt = require('bcryptjs');
const uniqueId = require('unique-id-generator');
const Mailer = require('../../mailer/creator');

// Register

exports.register = function(req, res) {

  let profileValue;
	if(req.body.gender == "Female"){
		profileValue = "https://res.cloudinary.com/dzmob0mk9/image/upload/v1520725961/defaultGirl.png";
	}else if(req.body.gender == "Male"){
		profileValue = "https://res.cloudinary.com/dzmob0mk9/image/upload/v1520725961/defaultBoy.png";
	}else if(req.body.gender == "Other"){
		profileValue = "https://res.cloudinary.com/dzmob0mk9/image/upload/v1520726450/profile.png";
	}else{
		profileValue = "https://res.cloudinary.com/dzmob0mk9/image/upload/v1520726450/profile.png";
  }
  
  let newUser = new User({
		name 			    : req.body.name,
		email			    : req.body.email,
		username		  : req.body.username,
		password		  : req.body.password,
		gender   		  : req.body.gender,
		genjouristId	: "10"+uniqueId(),
		dob 			    : req.body.dob,
		profileImgUrl	: profileValue,
    createdOn 		: Date(),	
    
	});
    User.addUser(newUser, (err, user) => {
      if(err){
        throw err;
      } else {
        
        var options = {
            name: user.name,
            subject: 'Welcome To Genjour!!!',
            email:user.email,
            username:user.username
          };
          Mailer.newUser(req,user.email,options)
          return res.json({success: true, msg:'User registered'});
      }
 
});
};


exports.getUserById = function(req, res) {
  var userId=req.params.id;
  if (userId.match(/^[0-9a-fA-F]{24}$/)) 
  {
  User.getUserById(req.params.id, (err, user) => {
    
  if(err){
    res.json({success: false, msg:'User Not Found'})
    return false;
  }
  res.json({success: true,user: {
    id: user._id,
    name: user.name,
    username:user.username,
    date:user.date,
    imageUrl:user.imageUrl,
    email:user.email,
    contact:user.contact,
    role:user.role,
    status:user.status
  }})
});
  }
  else{
    res.json({success: false})
  }
}


exports.getUserByGenjouristid = function(req, res) {
    var userId=req.params.id;
    if (userId.match(/^[0-9a-fA-F]{24}$/)) 
    {
    User.getUserByGenjouristid(req.params.id, (err, user) => {
      
    if(err){
      res.json({success: false, msg:'User Not Found'})
      return false;
    }
    res.json({success: true,user: {
      id: user._id,
      name: user.name,
      username:user.username,
      date:user.date,
      imageUrl:user.profileUrl,
      email:user.email,
      contact:user.contact,
      role:user.role,
      status:user.status
    }})
  });
    }
    else{
      res.json({success: false})
    }
  }


//-------Forgot Password---------//

exports.forgotpassword = function(req, res) {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
        
      });
    },
  function(token, done) {
  const email = req.body.email;
  User.getUserByEmail(email, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User Not Found'});}

      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
      user.save(function(err) {
        done(err, token, user);
      });
    });
  },

  function(token, user, done) {
    var options = {
        name: user.name,
        subject: 'Genjour Password Reset',
        url: 'http://localhost:4200/reset/' + token
      };
      Mailer.forgotPassword(req,user.email,options)
      return res.json({success: true, msg:'An e-mail has been sent to ' + user.email + ' with further instructions.'});
  }
], function(err) {
  if (err) throw err;
});
};


//-------Reset--------//

exports.resetPassword = function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.params.token })
      .where('resetPasswordExpires').gt(Date.now())
      .then((user) => {
        if (!user) {
          console.log(req.params.token);
          return res.json({success: false, msg: 'Password reset token is invalid or has expired.'});
        }
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.newPass, salt, (err, hash) => {
            if(err) throw err;
            req.body.newPass = hash;
            user.password = req.body.newPass;
            console.log(user.password);
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;
            user.save(function(err) {
              done(err,user);
          });
          });
        });
    });
    },
    function(user, done) {
        return res.json({success: true, msg: 'Password changed Succesfully.'});
        var options = {
            name: user.name,
            subject: 'Password Reset Successfully',
            email:user.email
          };
          Mailer.confirmReset(req,user.email,options)
    }
  ]);
};

//-------Profile--------//
exports.getProfile = function(req, res) {
  res.json({user: req.user});
};


exports.updateUserProfile = function(req, res) {
  var userId=req.user._id
  const user={
    name:req.body.name,
    contact:req.body.contact
  }
  
  User.updateUser(userId , user,(err, flag) => {

    if(err) { res.json({success: false, msg:'User Not Updated'});}
    else{
      res.json({success: true, msg:'User Updated'}) }
   
});
}

exports.getAllProfiles = function(req, res) {
  User.getUsers((err, users)=>{
    if(err){
      throw err;
    }

    res.json(users);
  })
};

exports.changeStatus = function(req, res) {
  var flag= {status: req.body.status}
  User.updateUser(req.params._id , flag,(err, flag) => {
  
    if(err) { res.json({success: false, msg:'User Not Updated'});};
    res.json({success: true, msg:'User Updated'});
});
}

exports.changePassword = function(req, res) {
  const oldPass = req.body.oldPass;
  var id = req.user._id;
  User.getUserById(id, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }
  User.comparePassword(oldPass, user.password, (err, isMatch) => {
    if(err) throw err;
    if(isMatch){
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.newPass, salt, (err, hash) => {
          if(err) throw err;
          req.body.newPass = hash;
          user.password = req.body.newPass;
          user.save()
         
        });
        res.json({success: true,msg:'Your Password has been Changed'});
      });
    
      } else {
      return res.json({success: false, msg: 'Wrong password'});
    }
  });
});
}

exports.deleteImage = function(req, res) {
  var id = req.user._id;
  User.deleteUserImage(id, (err, user) => {
    if(err){
      res.json({success: false,msg:'Something Went Wrong'});
    }
    else{
        res.json({success: true,msg:'Image Deleted'});
      }
  })
}

exports.addSubscription = function(req, res) {
  var id = req.user._id;
  User.deleteUserImage(id, (err, user) => {
    if(err){
      res.json({success: false,msg:'Something Went Wrong'});
    }
    else{
        res.json({success: true,msg:'Image Deleted'});
      }
  })
}