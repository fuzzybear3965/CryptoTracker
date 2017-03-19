//require('./app/index')
// Load required packages
var express = require('express');
var compression = require('compression');
var path = require('path');

// Load controllers
var homeController = require('./controllers/home');

// Create the Express application
var app = express();
var port = process.env.PORT || 80;
// request-promise for blockchain APIs
var rp = require('request-promise');
app.set('rp',rp);
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
router.get('/', homeController.getIndex);
router.post('/', homeController.postIndex);

// Register the route with Express
app.use(router);

// Start the serer
app.listen(3000);
