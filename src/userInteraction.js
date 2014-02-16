/**
*	Server-Side User interaction w/ Socket.IO
*/
var User = require('../models/userClass');

  var io,
    userObject;
    users = {},
    msgHistory = 2;

//Exported functions.
exports.getuserObject = function (){
  if (userObject) return userObject;
  return false; 
 };

 exports.getusers = function (){
  console.log(users);
  if (users) return users;
  return false;
 };

exports.connexionInteraction = function(socketio){
  io = socketio;

  //Propre à chaque connection
  io.sockets.on('connection', function(socket){
    var current_user = false;

    for(var k in users){
      socket.emit('newusr', users[k]);
    }

    /*
    *   Connect the user.
    */
    socket.on('login', function(user){ connectUser(socket, user); });

    /*
    *   Disconnect the user.
    */
   socket.on('disconnect', function(){ disconnectUser(current_user); });

  });
};

//Private functions.
 function disconnectUser(current_user){
    if(!current_user){ return false;}
    delete users[current_user.id];
    io.sockets.emit('disusr', current_user);
 }

 function connectUser(socket, user){
    current_user = user;
    current_user.id = user.mail.replace('@','-').replace('.','-');


    if(current_user.id == 'thomas-lol-com' && current_user.password == 'lol'){
      
      setuserObject(current_user);

      socket.emit('logged');
      
      io.sockets.emit('newusr', current_user);

    }else{
      error = 'password';
      if (current_user.id != 'thomas-lol-com') { error = 'email'; }
      socket.emit('error_login', error);
    }
    
 }

function setuserObject(current_user){
  firstname = 'thomas';
  lastname = 'brodusch';
  phone = '0123456789';
  userObject = new User(current_user.id, firstname, lastname, current_user.mail, phone);

  putInUsersTab(userObject);
}

function putInUsersTab(userObject){
  users[userObject.getid] = userObject;
}


