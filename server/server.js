var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var connections=[];

io.on('connection', function(socket){
    connections.push(socket);
    socket.on('send message', function(msg){
        var id=socket.id;
        io.emit('new message', {msg, id});
    });
});

io.on('connect_failed', function() {
    console.log("Sorry, there seems to be an issue with the connection!");
})


http.listen(3000, function(){
    console.log('listening on *:3000');
});

