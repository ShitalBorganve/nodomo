
var appconfig = require('./app/config');
var routes = require('./app/routes');
var server = require('./app/server');



routes(appconfig);

server(appconfig, function(){
  console.log("INFOS :: All is alright, app is running successfuly !");
});
