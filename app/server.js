/**
*	Server
*/

var server = function(appconfig){
	var http = require('http');
	http.createServer(appconfig).listen(appconfig.get('port'), function(){
		console.log("INFOS :: server check !");
		console.log('INFOS:: Web Server now running on port "'+appconfig.get('port')+'" check here => http://localhost:1337');
	});
};

module.exports = server;