/* 
*	Routes 
*/


var routes = function(app){
  var controllers = require('../controllers');

  app.get('/', controllers.index);
  app.get('/login', controllers.login);



// 404 Error - Always keep this at the last route.
app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

};

module.exports = routes;