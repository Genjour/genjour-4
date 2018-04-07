var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var multer = require('multer');
const path = require('path');

var config = require('./local')
module.exports = function(app) {
    app.use(session({
            secret: config.secrets.session,
            resave: true,
            saveUninitialized: true
        })) // session secret
    var storage = multer.diskStorage({
            destination: 'uploads',
            filename: function(req, file, cb) {
                cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
            }
        })
    function checkFileType(file, cb) {}
    app.use(multer({
        storage: storage,
        limits: { fileSize: 1000000 },
        fileFilter: function(req, file, cb) {
            const filetypes = /jpeg|jpg|png|gif/
            const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
            const mimetype = filetypes.test(file.mimetype)
            if (mimetype && extname) {
                return cb(null, true)
            } else {
                cb('Error: Files Only!')
            }
        }
    }).fields([{ name: 'photo', maxCount: 1 }, { name: 'upload', maxCount: 1 }]))
    app.use(passport.initialize())
    app.use(passport.session())
    app.use(flash()); 
    
}