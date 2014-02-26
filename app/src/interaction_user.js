// load up the user model
var User = require('../models/user');

	var connected_users = {};
	
module.exports = function(io,socket,mongoose){
	//New Socket connection openned !

	var me = false;


	////// New user inform he's connected.
	socket.on('logged', function(user){
		

		me = user;
		me.id = user.id;
		//find user infos in database.
		query = User.findOne({ _id: me.id });
			query.exec(function (err, User) {
				  	if (err) return handleError(err);
				  	me.email = User.local.email;
				  	me.firstname = User.local.firstname;
				 	me.lastname = User.local.lastname;
				 	me.picture_path = User.local.picture;

				 	//Add current user in 
				 	connected_users[me.email] = me;
					//Retrieve all connected users.
					for(var user in connected_users){
						if( (user != me.email) && (user !== undefined) ){
							//For each users already connected, send it to current user.
							socket.emit('newusr', connected_users[user], totalUsers()-1 );
						}
					}

					//Set socket's user.
					socket.set('current_user', me);
					//Inform other users of a new connected user.
					socket.broadcast.emit('newusr', me, totalUsers()-1 );
			});
	});

	////// New user is disconnected ( socket is closed ).
	socket.on('disconnect', function(){
		if(!me){ return false;}
		delete connected_users[me.email];

		//Inform all user of the current user's disconnection. 
		io.sockets.emit('disusr', me, totalUsers()-1 );
	});
	

function totalUsers(){
	return Object.keys(connected_users).length;
}

};