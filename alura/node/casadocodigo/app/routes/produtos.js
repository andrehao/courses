var models  = require('../../models');

module.exports = function (app) {

	var listaProdutos = function(req, res, next) {
		models.Produto.findAll().then(function(results){
			// if (err) {
			// 	return next(err);
			// }
			res.format({
				html : function () {
					res.render('produtos/lista', {lista : results});		
				},
				json : function () {
					res.json(results);
				}
			});
		});
		
		// var connection = app.infra.connectionFactory();
		// var produtosDAO = new app.infra.ProdutosDAO(connection);

		// produtosDAO.lista(function(err, results) {
		// 	if (err) {
		// 		return next(err);
		// 	}
		// 	res.format({
		// 		html : function () {
		// 			res.render('produtos/lista', {lista : results});		
		// 		},
		// 		json : function () {
		// 			res.json(results);
		// 		}
		// 	});
		// });

		// connection.end();
	};

	app.get('/produtos', listaProdutos);

	app.get('/produtos/form', function(req, res) {
		res.render('produtos/form', {errosValidacao : {}, produto : {}});
	});

	app.post('/produtos', function(req, res) {
		var produto = req.body;

		req.assert('titulo', 'Titulo é obrigatório').notEmpty();
		req.assert('preco', 'Formato inválido').isFloat().notEmpty();

		var erros = req.validationErrors();
		if (erros) {
			res.format({
				html : function () {
					res.status(400).render('produtos/form', {errosValidacao : erros, produto : produto});
				},
				json : function () {
					res.status(400).json(erros);
				}
			});
			return;
		}
		console.log(produto);
		models.Produto.build(produto).save().then(function(){
			res.redirect('/produtos');	
		});;
		
		
		// var connection = app.infra.connectionFactory();
		// var produtosDAO = new app.infra.ProdutosDAO(connection);
		// produtosDAO.salva(produto, function(erros, resultados) {
		// 	res.redirect('/produtos');
		// });

	});
}

