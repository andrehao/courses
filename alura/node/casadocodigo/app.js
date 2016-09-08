var app = require('./config/express')();
var ip = 'localhost';
var port = 3000;

app.listen(port, function(){
	console.log('Server is running at http://' + ip + ':' + port + "/");
});