
module.exports = function(port,app) {
const http = require('http');
const server = http.createServer(app);
const Support = require('./support-controller');
const Comment = require('./comment-controller');

var io = require('socket.io').listen(server);
server.listen(port, () => console.log(`API running on localhost:${port}`));
io.sockets.on('connection', function(socket){

    socket.on('commentAdded', function(commentAdded){
        Comment.addComment(io,commentAdded)
    })

    // socket.emit('commentCount', function(commentCount){
    //     Comment.getCommentCount(io,commentCount)
    // })

    socket.on('supportJournal', (supportJournal)=>{
        Support.supportJournal(io,supportJournal);
        });
    
    socket.on('supportGenjourist',(supportGenjourist)=>{
        Support.supportGenjourist(io,supportGenjourist)
    })

    });
}