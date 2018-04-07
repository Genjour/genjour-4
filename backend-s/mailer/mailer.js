var mailer = require("nodemailer");
var config=require('../config/local')
SwigEngine = require('swig').Swig,
viewsPath = '../views/emails/',
path = require('path'),
okay = require('okay'),
swig = new SwigEngine({
    varControls: ['<%=', '%>'],
    cache: false
})
// Use Smtp Protocol to send Email
exports.mailer = function(user, options,template) {
var smtpTransport = mailer.createTransport({
    service: config.mailer.service,
    auth: {
        user: config.mailer.auth.user,
        pass: config.mailer.auth.pass
    }
});

var mail = {
    from: config.mailer.from,
    to: user,
    subject: "Send Email Using Node.js",
    text: "Node.js New world for me",
    html: template
}

smtpTransport.sendMail(mail, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    smtpTransport.close();
});
}

exports.render = function(template, options, callback) {
    console.log(viewsPath+'/'+template)
    swig.renderFile(path.join(__dirname, viewsPath, template), options || {}, callback)

}

exports.sendMail = function(template, emails, options, callback) {
    var self = this
    options.baseUrl = config.baseUrl

    console.log('Mailer send email `' + options.subject + '` to', emails)
    self.render(template, options, okay(callback, function(output) {

      console.log('op'+template)
        var smtpTransport = mailer.createTransport({
           
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            
            auth: {
                user: config.mailer.auth.user,
                pass: config.mailer.auth.pass
            }
        });
        console.log()
        var mail = {
            from: config.mailer.from,
            to: emails,
            subject: options.subject,
            html: output
        }
        
        smtpTransport.sendMail(mail, function(error, response){
            if(error){
                console.log(error);
            }else{
                console.log("Message sent: " + response.message);
            }
        
            smtpTransport.close();
        });
    }))
}
