const { Sequelize } = require("sequelize"); //Importando Sequelize do sequelize (opcional diferente do usuario)
const conexao = require("../database/connection");

const Deposito = conexao.define("deposito", {
  usuario_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  razao_social: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  cnpj: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  nome_fantasia: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  telefone: {
    type: Sequelize.STRING,
  },
  celular: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cep: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  logradouro: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bairro: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  estado: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  complemento: {
    type: Sequelize.STRING,
  },
  latitude: {
    type: Sequelize.STRING,
  },
  longitude: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.ENUM("ATIVO", "INATIVO"),
    defaultValue: "ATIVO",
  },
});

module.exports = Deposito;
