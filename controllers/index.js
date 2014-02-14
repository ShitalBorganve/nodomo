
/*
 * Index Controller.
 */

var User = require('../models/userClass');

exports.index = function(req, res){

    userObject = new User('thomas','brodusch','toto@lol.com', '02030403054');

  res.render('index', { title: 'Accueil', user: userObject});
  console.log('INFOS:: user connected on Home page !');
};

exports.login = function(req, res){

   res.render('login', { title: 'Login'});
  console.log('INFOS:: user connected on login page !');
};