const { Sequelize } = require("sequelize"); //aqui usado sequelize 
const { DataTypes } = require("sequelize");

const conexao = require("../database/connection");

const Usuario = conexao.define("usuario", {
  
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sobrenome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  genero: {
    type: Sequelize.STRING,
  },
  data_nascimento: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    unique: true,
  },
  telefone: {
    type: Sequelize.STRING,
  },
  email: {  
    type: Sequelize.STRING,
    unique: true,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM(
        'ATIVO','INATIVO'
    ),
    defaultValue: 'ATIVO'
  },
});

module.exports = Usuario;