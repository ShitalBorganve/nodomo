
/*
 * Index Controller.
 */
 
var userInteraction = require('../src/userInteraction');

function login(req,res){
   res.render('login', { title: 'Login'});
}

exports.index = function(req, res){
   if (userInteraction.getuserObject()){

		res.render('index', { 
							title: 'Home', 
							user: userInteraction.getuserObject(), 
							userstab: userInteraction.getusers()
					});
	} 	
	else{login(req,res);}
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

