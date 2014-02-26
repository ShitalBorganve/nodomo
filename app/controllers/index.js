
/*
 * Index Controller.
 */


/*
*	Login
*/

exports.login = function(req,res){
   	 res.render('login', { title: 'Login', message: req.flash('loginMessage') });
	
};

exports.logout = function(req,res){
	req.logout();
	res.redirect('/login');
};

/*
*	Register
*/
exports.register = function(req,res){
	res.render('register', { title: 'Register', message: req.flash('signupMessage') });
};

/*
* Index
*/
exports.profile = function(req, res){
	res.render('index',{
						title: 'Home',
						user: req.user 						
	});

};

exports.error404 = function(req, res){
	res.status(404);
	// respond with html page
	if (req.accepts('html')) {
	  res.render('404', { title: 'Not found ', url: req.url });
	  return;
	}

	// respond with json
	if (req.accepts('json')) {
	  res.send({ error: 'Not found' });
	  return;
	}

	// default to plain-text. send()
	res.type('txt').send('Error 404 - Not found');
};

