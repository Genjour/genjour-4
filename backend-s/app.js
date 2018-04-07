'use strict'

const express	 = require('express');
const http 		 = require('http');
const path 		 = require('path');
const bodyParser = require('body-parser');
const cors 		 = require('cors');
const passport   = require('passport');
const mongoose   = require('mongoose')
const Promise    = require("bluebird");
const morgan     = require('morgan');
const app		 = express();
const server	 = http.createServer(app);
const config     = require('./config/local');
var io			 = require('socket.io').listen(server);





//================= connect to moongose database ====================

mongoose.connect(config.database, {useMongoClient: true});

mongoose.connection.on('connected', ()=>{
	console.log('connected to database '+ config.database);
});
mongoose.connection.on('Error', (err)=>{
	console.log('failed to database '+err);
});



app.use(cors());

// Cors Middleware
app.use(function(req, res, next) {
	//set headers to allow cross origin request.
		res.header("Access-Control-Allow-Origin", "*");
		res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});


// app.use(express.static(path.join(__dirname,'public')));

//Express Session Middleware


//Body Parser Middleware
app.use(express.static(path.join(config.root, 'uploads')))
app.use(express.static(path.join(config.root, 'public')));
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());


app.use(morgan('dev')); // log every request to the console


// index
require('./config/express')(app)
require('./routes')(app)

//Port
// app.use('*', function(req, res, next) {
//     var indexFile = path.resolve(config.root, 'public/index.html')
//     res.sendFile(indexFile)
// })
module.exports = app;
const port = process.env.PORT || '8080';
app.set('port', port);
require('./socket/socket')(port,app)
