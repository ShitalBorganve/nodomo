
	var messages = [];
	var history = 4;

module.exports = function(io,socket,mongoose){


	for(var k in messages){
		socket.emit('newmsg', messages[k]);
	}


	/* Live Chat */

	///// New message send by an user.
	socket.on('newmsg', function(message){
		var current_user;

		//Get the message's user. (user of current socket)
		socket.get('current_user', function(error, value){
		   current_user = value;     
        });

		date = new Date();
		message.h = date.getHours();
		message.m = date.getMinutes();
		message.user = current_user;


		messages.push(message);

		if(messages.length > history){
			messages.shift();
		}

		//Send message to all users.
		io.sockets.emit('newmsg', message);
	});

};
