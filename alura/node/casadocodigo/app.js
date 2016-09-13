var app = require('./config/express')();
var http = require('http').Server(app);
var ip = 'localhost';
var port = 3000;
var io = require('socket.io')(http);

app.set('io', io)

http.listen(port, function(){
	console.log('Server is running at http://' + ip + ':' + port + "/");
});