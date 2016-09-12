var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function () {
	var app = express();
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	// Avisa que o urlencoded consegue interpretar formularios mais complexos (Json maiores)
	app.use(bodyParser.urlencoded({extended : true}));
	app.use(bodyParser.json());
	app.use(expressValidator());

	//req -> middlewareBodyParser -> middlewareAutenticacao -> funcao que trata a requisacao

	load('routes', {cwd: 'app'}).then('infra').into(app);

	return app;
}