// Configuration file for our app.
module.exports = function(express, port, app, path, passport, flash){

	app.configure(function() {
		app.set('port', port);
		app.set('views', path.join(__dirname, '../views')); // path to our views dir (layout & twig views).
		app.set('view engine', 'twig');

		// Set up our express application.
		app.use(express.logger('dev')); // log every request to the console.
		app.use(express.cookieParser()); // read cookies (needed for auth).
		app.use(express.bodyParser()); // get information from html forms.
		app.use(express.json());       // to support JSON-encoded bodies.
		app.use(express.urlencoded()); // to support URL-encoded bodies.
		app.use(express.favicon());
		app.use(express.logger('dev'));
		app.use(express.methodOverride());
		app.use(express.static(path.join(__dirname, '../../public'))); // path to our public dir (static content).

		// Required for passport.
		app.use(express.session({ secret: 'tomoatooo' })); // session secret.
		app.use(passport.initialize());
		app.use(passport.session()); // persistent login sessions.
		app.use(flash()); // use connect-flash for flash messages stored in session.

		// Leave the router always in last (important!).
		app.use(app.router);
	});
};
