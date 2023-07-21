const { DataTypes } = require("sequelize");
const { Sequelize } = require("sequelize");
const conexao = require("../database/connection");
const Deposito = require("./deposito");

const Medicamento = conexao.define(
  "medicamento",
  {
    usuario_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deposito_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nome_medicamento: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nome_laboratorio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
    },
    dosagem: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unidade_dosagem: {
      type: DataTypes.ENUM("mg", "mcg", "g", "mL", "%", "Outro"),
      allowNull: false,
    },
    tipo: {
      type: DataTypes.ENUM(
        "CONTROLADO",
        "NAOCONTROLADO"
      ),
      allowNull: false,
    },
    preco_unitario: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //não precisa de status, pois o medicamento é excluído do banco de dados quando a quantidade chega a 0
  }, 
);



module.exports = Medicamento;
