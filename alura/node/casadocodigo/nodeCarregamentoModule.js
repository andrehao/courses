function require (path) {
	var condigoDoSeuModulo = carregado(path);
	var funcaoDeCarregamento = function () {
		// passa string e executa como javascript
		eval(condigoDoSeuModulo);
	}
	var module = {
		exports : {};
	};
	funcaoDeCarregamento(module, module.exports);
	return module;
}