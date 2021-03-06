const express	 = require('express');
const http 		 = require('http');
const path 		 = require('path');
const bodyParser = require('body-parser');
const cors 		 = require('cors');
const passport   = require('passport');
const mongoose   = require('mongoose')
const Promise    = require("bluebird");
const morgan     = require('morgan');
const config	 = require('./config/database');
const app		 = express();
const server	 = http.createServer(app);
var io			 = require('socket.io').listen(server);

mongoose.Promise = require('bluebird');

mongoose.connect(config.database, {useMongoClient: true});

mongoose.connection.on('connected', ()=>{
	console.log('connected to database '+ config.database);
});

mongoose.connection.on('Error', (err)=>{
	console.log('failed to database '+err);
});



const users = require('./routes/users');
const article = require('./routes/article');
const quotation = require('./routes/quotation');
const journal = require('./routes/journal');
const genjourist = require('./routes/genjourist');
const support = require('./routes/support');
const comment = require('./routes/comment');

// Cors Middleware
app.use(cors());
app.use(function(req, res, next) {
	//set headers to allow cross origin request.
		res.header("Access-Control-Allow-Origin", "*");
		res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

app.use(express.json({limit: '50mb'}));
app.use(express.static(path.join(__dirname,'public')));

//Express Session Middleware


//Body Parser Middleware
app.use(bodyParser.json());
app.use(morgan('dev')); // log every request to the console
//passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


 app.use('/',users);
 app.use('/',article);
 app.use('/',quotation);
 app.use('/',journal);
 app.use('/',genjourist);
 app.use('/',support);
 app.use('/',comment);

//Index Route
app.get('/',(req,res)=>{
	res.send('Invalid Endpoint');
});

module.exports = app;
const port = process.env.PORT || '3000';
app.set('port', port);
require('./socket/socket')(port,app)
