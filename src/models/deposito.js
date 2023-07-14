const { DataTypes } = require("sequelize"); //Importando DataTypes do sequelize (opcional diferente do usuario)
const conexao = require("../database/connection");

const Deposito = conexao.define(
  "deposito",
  {
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    razao_social: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    cnpj: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    nome_fantasia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    telefone: {
      type: DataTypes.STRING,
    },
    celular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logradouro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complemento: {
      type: DataTypes.STRING,
    },
    latitude: {
      type: DataTypes.STRING,
    },
    longitude: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM(
          'ATIVO','INATIVO'
      ),
      defaultValue: 'ATIVO'
    },
  },
  
);

module.exports = Deposito;
