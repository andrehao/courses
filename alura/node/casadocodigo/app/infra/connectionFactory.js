var mysql = require('mysql');

var connectMYSQL = function() {
	return mysql.createConnection({
		host : "localhost",
		user : "root",
		password : "",
		database : "casadocodigo_nodejs"
	});
}

// wrapper
module.exports = function() {
	return connectMYSQL;
}