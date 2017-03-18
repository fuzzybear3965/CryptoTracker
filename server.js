//require('./app/index')
// Load required packages
var express = require('express');
var compression = require('compression');
var path = require('path');

// Load controllers
var homeController = require('./controllers/home');

// Create the Express application
var app = express();

// add content compression middleware
app.use(compression({"threshold": "false"}));

// Add static middleware
var oneDay = 86400000;
app.use(express.static(path.join(__dirname, '/public'), { "maxAge": oneDay} ));

// Add pug view engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

// Create the Express router
var router = express.Router();

// Root route
//router.get('/', function(req, res) {
   //res.locals.ip = req.ip;
   //res.render('home');
//});
router.get('/', homeController.index);

// Register the route with Express
app.use(router);

// Start the serer
app.listen(3000);
