
// Get all the moduless we need.
var express  = require('express'),
	port     = process.env.PORT || 1337,
	app      = express(),
	path     = require('path'),
	http     = require('http'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	flash    = require('connect-flash');

// Configuration ===
	var filters  = require('./app/config/filters'); // auth filters.
	var database = require('./app/config/database'); // database url.
	require('./app/config/passport')(passport); // pass passport for configuration.
	require('./app/config/config')(express, port, app, path, passport,flash); // app general config.

// Controllers ===
	var controllers = {
			general: require('./app/controllers/index')
	};

// Routes ===
	/* Load our routes and pass it:
		- our app,
		- passport configure in 'local-strategy',
		- auth filter,
		- controllers.
	*/
require('./app/routes.js')(app, passport, filters, controllers); 


// Launch the app ! ===
mongoose.connect(database.url); // connect to our database
var server = app.listen(port);
var io     = require('socket.io').listen(server);
console.log('Nodomo is running on port ' + port);

//Propre à chaque connection
io.sockets.on('connection', function(socket){
	
	var interaction_user = require('./app/src/interaction_user')(io,socket, mongoose);
	
});






