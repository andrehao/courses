function ProdutosDAO(connection) {
	this._connection = connection;
}

ProdutosDAO.prototype.lista = function (callback) {
	this._connection.query('select * from produtos', callback);
}

ProdutosDAO.prototype.salva = function (produto, callback) {
	this._connection.query('insert into produtos set ?', produto, callback);
}

// ProdutosDAO.prototype.salva = function (produto, callback) {
//     this._connection.query('insert into produtos (titulo, preco, descricao) values (?, ?, ?)',  [produto.titulo, produto.preco, produto.descricao], callback);
// }

ProdutosDAO.prototype.remove = function (id, callback) {
	this._connection.query('delete from produtos where id=' + id, produto, callback);
}

module.exports = function () {
	return ProdutosDAO;
}