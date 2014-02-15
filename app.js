
var config = require('./app/config'),
	app = config.getapp(),
	server = config.getserver(),
	httpServer = config.gethttpServer(),
	routes = config.getroutes(),
	controllers = config.getcontrollers();
	

config.start();
httpServer.start(server, app);
routes.start(controllers, app);




