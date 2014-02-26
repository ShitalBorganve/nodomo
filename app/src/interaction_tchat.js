
	var messages = [];
	var history = 4;
	
module.exports = function(io,socket,mongoose){



	/* Live Chat */

	/*
	*	On a reçu un msg.
	*/
	socket.on('newmsg', function(message, user){
		
		
		date = new Date();
		message.h = date.getHours();
		message.m = date.getMinutes();
		message.user = findUser(user);

		console.log(message.user);

		messages.push(message);

		if(messages.length > history){
			messages.shift();
		}

		io.sockets.emit('newmsg', message);
	});

	

};
};