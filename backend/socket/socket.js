
module.exports = function(port,app) {
const http = require('http');
const server = http.createServer(app);
const Support = require('./support-controller');

var io = require('socket.io').listen(server);
server.listen(port, () => console.log(`API running on localhost:${port}`));
io.sockets.on('connection', function(socket){


    socket.on('supportJournal', (supportJournal)=>{
        Support.supportJournal(io,supportJournal);
        });


    });
}