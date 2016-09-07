var http = require('http');
var ip = 'localhost';
var port = 3000;


http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type' : 'text/html'});
	if (request.url == "/produtos") {
		response.end("<html><body><h1>listando os produtos da loja</h1></body></html>");
	} else {
		response.end("<html><body><h1>home da casa do codigo</h1></body></html>");
	}
}).listen(port, ip);

console.log("Server is running at http://" + ip + ":" + port + "/");