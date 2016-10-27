var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var users=[];
var connections=[];

io= io.listen(http);

io.on('connection', function(socket){
    connections.push(socket);
    console.log('connection....', connections.length);

    socket.on('disconnect', function(data){
        if(!socket.username) return;
        username.splice(users.indexOf(socket.username),1);
        updateUsernames();
        connections.splice(connections.indexOf(socket), 1);
        console.log("RRRR",connections.length );
    })

    socket.on('send message', function(msg){
        console.log("in send message", msg);
        io.emit('new message', msg);
    });

    socket.on('new user', function(data, callback){
        callback(true);
        socket.username=data;
        users.push(socket.username);
        updateUsernames();
        console.log("in new user....")
    })

    function updateUsernames(){
        io.emit('get users', usernames);
    }
});

io.on('connect_failed', function() {
    console.log("Sorry, there seems to be an issue with the connection!");
})


http.listen(3000, function(){
    console.log('listening on *:3000');
});

