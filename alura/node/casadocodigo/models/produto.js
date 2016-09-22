module.exports = function(sequelize, DataTypes) {
  var Produto = sequelize.define("Produto", {
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.INTEGER
  }, {});

  return Produto;
};