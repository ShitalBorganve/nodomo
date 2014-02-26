
var userid = $('ul.user-infos').attr('id');


    
function refreshTotalUsers(count){
    if(count == null)   return $('.users-count').text('0');
    if(count != null)  return $('.users-count').text(count);
}
   
socket.emit('logged', { id: userid });

$(document).ready(function(){

   socket.on('newusr', function(user,count){
    $('ul#connected-users').append('<li id="'+user.id+'" class="user"><img src="'+user.picture_path+'" class="user-picture" alt="User Image" /><p><b>'+user.firstname+' ' +user.lastname+'</b></p></li>');
    refreshTotalUsers(count);
  });

  socket.on('disusr', function(user, count){
    $('#'+ user.id).remove();
    refreshTotalUsers(count);
  });

                            /**
                *   Envois de message
                **/
                var lastmsg = false;
                
                $('#tchat-send-btn').click(function(event){
                    event.preventDefault();
                    
                  
                    //Envoi du msg au server.
                    socket.emit('newmsg', {
                            message : $('#tchat-message').val(),
                            user: user_id 
                        });

                    //On efface pour eviter le spam.
                    $('#tchat-message').val('');
                    $('#tchat-message').focus();
                });

                /**
                *   Reception de message.
                **/

                socket.on('newmsg', function(message){
                    if(lastmsg != message.user.id){
                        $('#tchat-messages').append('<li class="sep"></li>');
                        lastmsg = message.user.id;
                    }

                    $('#tchat-messages').append('<li class="message"><span>'+message.user.firstname+ ' @'+ message.h+'h'+message.m+' - </span>'+ message.message + '</li>');
                    $('#tchat-messages').animate({scrollTop : $('#tchat-messages').prop('scrollHeight')}, 50);
                });

                });
                