/**
 * Configuration
 * Module dependencies.
 */

var express = require('express'),
	path = require('path'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),

	controllers = require('../controllers'),
	routes = require('./routes'),
	httpServer = require('./server');

exports.start = function(){

			// all environments
			app.set('port', process.env.PORT || 1337);
			app.set('views', path.join(__dirname, '../views'));
			app.set('view engine', 'twig');
			app.use(express.favicon());
			app.use(express.logger('dev'));
			app.use(express.json());
			app.use(express.urlencoded());
			app.use(express.methodOverride());
			app.use(app.router);
			app.use(express.static(path.join(__dirname, '../public')));

			// development only
			if ('development' == app.get('env')) {
				app.use(express.errorHandler());
			}
};

exports.getapp = function(){
	return app;
};

exports.getserver = function(){
	return server;
};

exports.getcontrollers = function(){
	return controllers;
};

exports.getroutes = function(){
	return routes;
};

exports.gethttpServer = function(){
	return httpServer;
};
	





