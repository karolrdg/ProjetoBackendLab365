// Desc: Arquivo principal da API, onde são definidas as rotas e inicializada a API
require("dotenv").config();
const express = require("express");
const conexao = require("./src/database/connection");
const cors = require("cors");

// Controllers de Usuário
const cadastraUsuario = require("./src/controllers/usuario/cadastraUsuario");
const excluiUsuario = require("./src/controllers/usuario/excluiUsuario");
const listaUsuario = require("./src/controllers/usuario/listaUsuario");
const listaTodosUsuarios = require("./src/controllers/usuario/listaTodosUsuarios");
const atualizaUsuario = require("./src/controllers/usuario/atualizaUsuario");
const atualizaStatusUsuario = require("./src/controllers/usuario/atualizaStatusUsuario");
const atualizaSenhaUsuario = require("./src/controllers/usuario/atualizaSenhaUsuario");

// Controllers de Depósito
const cadastraDeposito = require("./src/controllers/deposito/cadastraDeposito");
const excluiDeposito = require("./src/controllers/deposito/excluiDeposito");
const listaDeposito = require("./src/controllers/deposito/listaDeposito");
const listaTodosDepositos = require("./src/controllers/deposito/listaTodosDepositos");
const atualizaDeposito = require("./src/controllers/deposito/atualizaDeposito");
const atualizaStatusDeposito = require("./src/controllers/deposito/atualizaStatusDeposito");

// Controllers de Medicamento
const cadastraMedicamento = require("./src/controllers/medicamento/cadastraMedicamento");
const excluiMedicamento = require("./src/controllers/medicamento/excluiMedicamento");
const listaMedicamento = require("./src/controllers/medicamento/listaMedicamento");
const listaTodosMedicamentos = require("./src/controllers/medicamento/listaTodosMedicamentos");
const atualizaMedicamento = require("./src/controllers/medicamento/atualizaMedicamento");

// Middlewares
const validaUsuario = require("./src/middlewares/validaUsuario");
const validaDeposito = require("./src/middlewares/validaDeposito");
const validaMedicamento = require("./src/middlewares/validaMedicamento");

//instancia express
const app = express();
//configura express para receber json
app.use(express.json());

//ROTAS USUARIOS
app.post("/api/usuarios", validaUsuario, cadastraUsuario);
app.delete("/api/usuarios/:id", excluiUsuario);
app.get("/api/usuarios/:id", listaUsuario);
app.get("/api/usuarios/", listaTodosUsuarios);
app.patch("/api/usuarios/:id", atualizaUsuario);
app.patch("/api/usuarios/:id/status", atualizaStatusUsuario);
app.patch("/api/usuarios/:id/senha", atualizaSenhaUsuario);

//ROTAS DEPOSITOS
app.post("/api/depositos", validaDeposito, cadastraDeposito);
app.delete("/api/depositos/:id", excluiDeposito);
app.get("/api/depositos/:id", listaDeposito);
app.get("/api/depositos/", listaTodosDepositos);
app.patch("/api/depositos/:id", atualizaDeposito);
app.patch("/api/depositos/:id/status", atualizaStatusDeposito);

//ROTAS MEDICAMENTOS
app.post("/api/medicamentos", validaMedicamento, cadastraMedicamento);
app.delete("/api/medicamentos/:id", excluiMedicamento);
app.get("/api/medicamentos/:id", listaMedicamento);
app.get("/api/medicamentos/", listaTodosMedicamentos);
app.patch("/api/medicamentos/:id", atualizaMedicamento);

//conecta com o banco de dados
conexao.authenticate();
conexao.sync({ alter: true });

//JWT - JSON Web Token - Autenticação de usuários na API
//login e senha
const middlewareValidarJWT = (req, res, next) => {
    const jwt = req.headers["authorization"];
    const chavePrivada = "test";
  
    // Efetuando a validação do JWT:
    const jwtService = require("jsonwebtoken");
    jwtService.verify(jwt, chavePrivada, (err, userInfo) => {
      if (err) {
        res.status(403).end();
        return;
      }
  
      req.userInfo = userInfo;
      next();
    });
  };
  
  // Efetua o parse do application/json
  const bodyParser = require("body-parser");
  app.use(bodyParser.json());
  
  app.get("/status", (req, res) => {
    const jwt = req.headers["authorization"];
  
    res.json({
      status: "OK",
      jwt,
    });
  });
  
  // Criando o token
  app.post("/usuarios/login", function (req, res) {
    const { email, senha } = req.body;
  
    // Verifica se os campos estão presentes e não estão vazios
    if (!email || !senha || email.trim() === "" || senha.trim() === "") {
      res.status(400).json({ mensagem: "E-mail ou senha inválidos." });
      return;
    }
  
    if (email === "karolinerodrigues12@outlook.com" && senha === "123456") {
      const jwt = require("jsonwebtoken");
      const dadosUsuario = {
        nome: "Karoline Rodrigues",
        email: "karolinerodrigues12@outlook.com",
        id: 1,
      };
  
      const chavePrivada = "test";
  
      jwt.sign(dadosUsuario, chavePrivada, (err, token) => {
        if (err) {
          res.status(500).json({ mensagem: "Erro ao gerar o JWT" });
          return;
        }
  
        res.set("x-access-token", token);
        res.end();
      });
    } else {
      res.status(400).json({ mensagem: "E-mail ou senha inválidos." });
    }
  });
  
  // Validando o token
  app.get("/user", middlewareValidarJWT, (req, res) => {
    res.json(req.userInfo);
  });
  
  app.use((req, res) => {
    res.status(404).json({ mensagem: "Endpoint não encontrado" });
  });
  

//inicializa a API na porta definida no arquivo .env

app.listen(process.env.PORT_API, () => {
  console.log("Servidor rodando na porta 3001");
});
