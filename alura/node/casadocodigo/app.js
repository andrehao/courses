var app = require('./config/express')();
var http = require('http').Server(app);
var ip = 'localhost';
var port = process.env.PORT || 3000;
var io = require('socket.io')(http);
var models = require("./models");

app.set('io', io);


models.sequelize.sync().then(function () {
	http.listen(port, function(){
		console.log('Server is running at http://' + ip + ':' + port + "/");
	});
});