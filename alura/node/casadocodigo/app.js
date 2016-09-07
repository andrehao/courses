var app = require('./config/express')();
var ip = 'localhost';
var port = 3000;

app.get('/produtos', function(req, res) {
	// res.send("<html><body><h1>Listagem de produtos</h1></body></html>");
	res.render("produtos/lista");
});

app.listen(port, function(){
	console.log('Server is running at http://' + ip + ':' + port + "/");
});