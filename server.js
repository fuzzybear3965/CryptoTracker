//require('./app/index')
// Load required packages
var express = require('express');
var compression = require('compression');
var path = require('path');
var bodyParser = require('body-parser');	
// Load controllers
var homeController = require('./controllers/home');

// Create the Express application
var app = express();
var port = process.env.PORT || 80;
var server =require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3001);
io.on("connection", function(socket){
	socket.on('chat message', function(msg){
		console.log("message: " + msg);
	});
});
// request-promise for blockchain APIs

var rp = require('request-promise');
app.set('rp',rp);
// add content compression middleware
app.use(compression({"threshold": "false"}));
 app.use(bodyParser.urlencoded({
     extended: true
 }));
app.use(bodyParser.json());

// Add static middleware
var oneDay = 86400000;
app.use(express.static(path.join(__dirname, '/public'), { "maxAge": oneDay} ));

// Add pug view engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

// Create the Express router
var router = express.Router();

// Root route
router.get('/', homeController.getIndex);
//router.post('/', homeController.postIndex);

router.post('/', function(req,res) {
	console.log(req.body);
//	res.render('home');
});

// Register the route with Express
app.use(router);

// Start the serer
app.listen(3000);