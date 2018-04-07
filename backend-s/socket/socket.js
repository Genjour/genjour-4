'use strict'
module.exports = function(port,app) {
const http = require('http');
const server = http.createServer(app);

var io = require('socket.io').listen(server);

server.listen(port, () => console.log(`API running on localhost:${port}`));
io.sockets.on('connection', function(socket){

    // socket.on('liked', (liked)=>{
    // like.like(io,liked);
    // });
    
    // socket.on('commentAdded', function(commentAdded){
    //     comment.addcomment(io,commentAdded);
    // });
    // socket.on('commentDeleted', function(commentDeleted){
    //     comment.deletecomment(io,commentDeleted);
    // });
    // socket.on('replyAdded', function(replyAdded){
    //     reply.addreply(io,replyAdded);
    // });
    // socket.on('replyDeleted', function(replyDeleted){
    //     reply.deletereply(io,replyDeleted);
    // });
    
    });
}