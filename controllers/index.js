
/*
 * Index Controller.
 */

var User = require('../models/userClass');

exports.index = function(req, res){

    userObject = new User('thomas','brodusch','toto@lol.com', '02030403054');

  res.render('index', { title: 'Accueil', user: userObject});
  
};

exports.login = function(req, res){

   res.render('login', { title: 'Login'});
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

