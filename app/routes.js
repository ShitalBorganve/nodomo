/* 
*	Routes 
*/
exports.start = function(controllers, app){
  var debug = "INFOS:: user connected on page ";

  app.get('/', function(req, res){
    console.log(debug + req.url);
    controllers.index(req,res);
  });
  
  // 404 Error - Always keep this at the last route.
  app.use(function(req, res, next){
     console.log(debug+ req.url +' (404 error page)');
     controllers.error404(req,res);
  });

};