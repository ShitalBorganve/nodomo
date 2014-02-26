var socket = io.connect('http://localhost:1337');

function refreshTotalUsers(count){
    if(count == null)   return $('.users-count').text('0');
    if(count != null)  return $('.users-count').text(count);
}
   


$(document).ready(function(){
    socket.emit('logged', { id: $('ul.user-infos').attr('id') });
    socket.on('newusr', function(user,count){
        $('ul#connected-users').append('<li id="'+user.id+'" class="user"><img src="'+user.picture_path+'" class="user-picture" alt="User Image" /><p><b>'+user.firstname+' ' +user.lastname+'</b></p></li>');
        refreshTotalUsers(count);
    });
    socket.on('disusr', function(user, count){
        $('#'+ user.id).remove();
        refreshTotalUsers(count);
    });

});
                