'use strict'
var path = require('path')
var baseUrl = 'https://www.genjour.com'
module.exports = {
    root: path.normalize(__dirname + '/../../server/'),
    baseUrl: baseUrl,
    secrets: {
        session: 'thisismysecreteeeekeyfuckyeah!'
    },

    google: {
            'clientID'         : '249599959777-g84j52g3l8vm0bvn2j5f9b37ci62j9iq.apps.googleusercontent.com',
            'clientSecret'     : '0HnZSVf3Bazw1KQ7vnpG8IYy',
            'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    
    },
    mailer: {
        'service': 'smtp',
        'auth': {
          'user': 'amitlucky.1990@gmail.com',
          'pass': 'ultimatemillion'          
        },
        'from': 'Genjour Media Pvt. Ltd. <genjour@gmail.com>',
    },
    database:'mongodb://localhost:27017/genjour3',
    //database: 'mongodb://root:abc123@ds159997.mlab.com:59997/thanksmummy',
    adminEmail: 'amitlucky.1990@gmail.com',
}