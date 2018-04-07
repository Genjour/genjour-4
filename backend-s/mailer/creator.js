
const Mailer = require('./mailer');
exports.createdStory = function(req, to, option) {
    Mailer.sendMail('new-story.html', to, option, function(err, data) {
        if (err) {
            console.log(err)
        }
        console.log(data)
    })
  }
  exports.storyLive = function(req, to, option) {
    Mailer.sendMail('live-story.html', to, option, function(err, data) {
        if (err) {
            console.log(err)
        }
        console.log(data)
    })
  }
  exports.storyReject = function(req, to, option) {
  Mailer.sendMail('story-reject.html', to, option, function(err, data) {
      if (err) {
          console.log(err)
      }
      console.log(data)
  })
}
  exports.forgotPassword = function(req, to, option) {
    Mailer.sendMail('forgot-password.html', to, option, function(err, data) {
        if (err) {
            console.log(err)
        }
        console.log(data)
    })
  }
  
  exports.confirmReset = function(req, to, option) {
    Mailer.sendMail('reset-confirm.html', to, option, function(err, data) {
        if (err) {
            console.log(err)
        }
        console.log(data)
    })
  }
  exports.newUser = function(req, to, option) {
    Mailer.sendMail('welcome.html', to, option, function(err, data) {
        if (err) {
            console.log(err)
        }
        console.log(data)
    })
  }
