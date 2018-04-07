const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//User Schema
const  UserSchema = mongoose.Schema({
  
  name                   : {type: String },
  email                  : {type: String, lowercase: true, unique: true },
  username               : {type: String, unique: true},
  password               : {type: String},
  genjouristId           : {type: String },
  gender                 : {type: String },
  google                 : {},
  dob                    : String,
  profileImgUrl          : {type: String },
  createdOn              : {type: Date, default: null},
  status                 : {type: Boolean, default: true },
  mobileNumber           : {type: String },
  bio                    : {type: String },
  mobileStatus           : { type: Boolean, default: false },
  emailStatus            : { type: Boolean, default: false },
  updatedAt              : { type: Date, default: Date.now },
  lastLogin              : {type: Date, default: null },
  resetPasswordToken     : {type: String },
  resetPasswordExpires   : Date,
  emailVerified          : { type: Boolean, default: false },
  emailSubscription      : { type: Boolean, default: true }
  
  
});


const User = module.exports = mongoose.model('User',UserSchema);

module.exports.getUserById = function (id,callback){
  User.findById(id,callback);
}

module.exports.getUserByEmail = function(email, callback){
  const query = {email: email}
  User.findOne(query, callback);
}

module.exports.getUserByUsername = function (username,callback) {
  const query = {username: username}
  User.findOne(query, callback);

}

//=============================================================================
//============================== add new user =================================
//=============================================================================

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(newUser.password, salt, (err,hash)=>{
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}


//=============================================================================
//============================== compare password =============================
//=============================================================================

module.exports.comparePassword = function(candiadatePassword, hash, callback){
  bcrypt.compare(candiadatePassword,hash,(err,isMatch)=>{
    if(err) throw err;
    callback(null,isMatch);
  });
}


//=============================================================================
//============================== find user by name ============================
//=============================================================================

module.exports.findUserByName = function(name, callback){
  User.find({name:name},{name:1, genjouristId:1, dob:1, profileImg:1 },callback);
}

//=============================================================================
//============================== find user by genjouristId ====================
//=============================================================================

module.exports.getUserByGenjouristid = function(userId, callback){
        const query = {genjouristId: userId}
        User.findOne(query, callback);
}



//=============================================================================
//====================== get supporters and supporting ========================
//=============================================================================

module.exports.getSupporting = function(arr,callback){
  User.find(
              {genjouristId:{$in:arr}},
              {name:1, genjouristId:1, dob:1, imgUrl:1 },
              callback
            );
}

module.exports.getSupporters = function(arr,callback){
  User.find(
              {genjouristId:{$in:arr}},
              {name:1, genjouristId:1, dob:1, imgUrl:1 },
              callback
            );
}

module.exports.changeProfileImg = function(genjouristId,imgAddress,callback){
  User.findOneAndUpdate(
                          {genjouristId:genjouristId},
                          {$set: {profileImg:imgAddress}}, callback
  )
}

module.exports.findUserAndUpdateInfo = function(userId,data,callback){
  User.findOneAndUpdate({genjouristId:userId}, data, callback)
}

module.exports.updateUser = function(userId,flag, callback){
  User.findOneAndUpdate({genjouristId:userId}, data, callback)
}

module.exports.updateImage = function(userId,image, callback){
  User.findOneAndUpdate({genjouristId:userId}, 
   {'profileImg': image}, callback);
}

module.exports.getUsers =(callback, limit) =>{
  User.find(callback).limit(limit)
}

module.exports.deleteUserImage = function(genjouristId, callback){
  User.update({ genjouristId:genjouristId}, 
     {$set: {profileImg: null}},callback);
}
