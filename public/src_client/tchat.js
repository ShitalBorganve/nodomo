$(document).ready(function(){
	var lastmsg = false;
    
    //Send new message.         
    $('#tchat-send-btn').click(function(event){
        event.preventDefault();
        //Send message to server.
        socket.emit('newmsg', { message : $('#tchat-message').val() });
        //Erase input (against flood !).
	    $('#tchat-message').val('');
	    $('#tchat-message').focus();
    });

    ///Receive new message.
    socket.on('newmsg', function(message){
    	if(lastmsg != message.user.id){
	        $('#tchat-messages').append('<hr>');
	        lastmsg = message.user.id;
    	}
		$('#tchat-messages').append('<li class="message"><img src="'+message.user.picture_path+'"/><span>'+message.user.firstname+ ' @'+ message.h+'h'+message.m+' - </span>'+ message.message + '</li>');
     	$('#tchat-messages').animate({scrollTop : $('#tchat-messages').prop('scrollHeight')}, 50);
    });
});