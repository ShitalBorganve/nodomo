/**
 * Configuration
 * Module dependencies.
 */

	var express = require('express');
	var path = require('path');

	var app = express();

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
	console.log("INFOS :: config check !");

module.exports = app;


