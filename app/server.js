/**
*	Server
*/
module.exports.start = function(http, app){
	http.listen(app.get('port'));	
};