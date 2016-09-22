module.exports = function(sequelize, DataTypes) {
	var Product = sequelize.define("Product", {
		titulo: DataTypes.STRING,
		descricao: DataTypes.STRING,
    	preco: DataTypes.INTEGER
	}, {});
	return Product;
};