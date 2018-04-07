
'use strict'

module.exports = function(app) {

    app.use('/auth/google', require('./auth/google'));
    app.use('/auth/local', require('./auth/local'));
    app.use('/user', require('./routes/user'));
    app.use('/journal/api', require('./routes/journal/index'));
    app.use('/comment/api', require('./routes/functionalities/comment/index'));
    app.use('/reply/api', require('./routes/functionalities/reply/index'));
    app.use('/supportJournal/api', require('./routes/functionalities/supportJournal/index'));
    app.use('/supportUser/api', require('./routes/functionalities/supportUser/index'));
    app.use('/bookmark/api', require('./routes/functionalities/bookmark/index'));
    app.use('/genjourist/api', require('./routes/genjourist/index'));
    
    // app.use('/categories', require('./routes/categories'))
    // app.use('/likes',require('./routes/likes'))
    // app.use('/stories', require('./routes/stories'))
    // app.use('/image',require('./routes/imageUpload'))
    // app.use('/comments', require('./routes/comments'))
    // app.use('/replies', require('./routes/replies'))

}