// Desc: Arquivo principal da API, onde são definidas as rotas e inicializada a API
require('dotenv').config()
const express = require('express')
const conexao = require('./src/database/connection')



// Controllers de Usuário
const cadastraUsuario = require('./src/controllers/usuario/cadastraUsuario');
const excluiUsuario = require("./src/controllers/usuario/excluiUsuario");
const listaUsuario = require("./src/controllers/usuario/listaUsuario");
const listaTodosUsuarios = require("./src/controllers/usuario/listaTodosUsuarios");
const atualizaUsuario = require("./src/controllers/usuario/atualizaUsuario");
const atualizaStatusUsuario = require("./src/controllers/usuario/atualizaStatusUsuario");
const atualizaSenhaUsuario = require("./src/controllers/usuario/atualizaSenhaUsuario");

// Controllers de Depósito
const cadastraDeposito = require('./src/controllers/deposito/cadastraDeposito');
const excluiDeposito = require("./src/controllers/deposito/excluiDeposito");
const listaDeposito = require("./src/controllers/deposito/listaDeposito");
const listaTodosDepositos = require("./src/controllers/deposito/listaTodosDepositos");
const atualizaDeposito = require("./src/controllers/deposito/atualizaDeposito");

// Controllers de Medicamento
const cadastraMedicamento = require('./src/controllers/medicamento/cadastraMedicamento');
const excluiMedicamento = require("./src/controllers/medicamento/excluiMedicamento");
const listaMedicamento = require("./src/controllers/medicamento/listaMedicamento");
const listaTodosMedicamentos = require("./src/controllers/medicamento/listaTodosMedicamentos");
const atualizaMedicamento = require("./src/controllers/medicamento/atualizaMedicamento");
const atualizaStatusMedicamento = require("./src/controllers/medicamento/atualizaStatusMedicamento");

// Middlewares
const validaUsuario = require("./src/middlewares/validaUsuario");
const validaDeposito = require("./src/middlewares/validaDeposito");
const validaMedicamento = require("./src/middlewares/validaMedicamento");

//instancia express
const app = express()
//configura express para receber json
app.use(express.json()) 

//ROTAS USUARIOS
app.post('/api/usuarios', validaUsuario, cadastraUsuario )
app.delete('/api/usuarios/:id', excluiUsuario)
app.get('/api/usuarios/:id', listaUsuario)
app.get('/api/usuarios/', listaTodosUsuarios)
app.patch('/api/usuarios/:id', atualizaUsuario)
app.patch('/api/usuarios/:id/status', atualizaStatusUsuario)
app.patch('/api/usuarios/:id/senha', atualizaSenhaUsuario)

//ROTAS DEPOSITOS
app.post('/api/depositos', validaDeposito, cadastraDeposito)
app.delete('/api/depositos/:id', excluiDeposito)
app.get('/api/depositos/:id', listaDeposito)
app.get('/api/depositos/', listaTodosDepositos)
app.patch('/api/depositos/:id', atualizaDeposito)

//ROTAS MEDICAMENTOS
app.post('/api/medicamentos', validaMedicamento, cadastraMedicamento)
app.delete('/api/medicamentos/:id', excluiMedicamento)
app.get('/api/medicamentos/:id', listaMedicamento)
app.get('/api/medicamentos/', listaTodosMedicamentos)
app.patch('/api/medicamentos/:id', atualizaMedicamento)
app.patch('/api/medicamentos/:id/status', atualizaStatusMedicamento)

//conecta com o banco de dados
conexao.authenticate();
conexao.sync({alter: true})


//JWT - JSON Web Token - Autenticação de usuários na API 
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
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get(
    "/status",
    (req, res) => {
        const jwt = req.headers['authorization'];

        res.json({
            status: "OK",
            jwt
        });
    }
);

app.post(
    "/login",
    (req, res) => {
        const { usuario, senha } = req.body;

        if (usuario === "karoline" && senha === "123456") {
            const jwt = require("jsonwebtoken");
            const dadosUsuario = {
                nome: "karoline",
                email: "karolinerodrigues12@outlook.com",
                id: 1
            };

            const chavePrivada = "test";

            jwt.sign(dadosUsuario, chavePrivada, (err, token) => {
                if (err) {
                    res
                        .status(500)
                        .json({ mensagem: "Erro ao gerar o JWT" });

                    return;
                }

                res.set("x-access-token", token);
                res.end();
            });
        } else {
            res.status(401);
	    res.end();
        }
    }
);

app.get(
    "/user",
    middlewareValidarJWT,
    (req, res) => {
        res.json(req.userInfo);
    }
);





//inicializa a API na porta definida no arquivo .env 
app.listen(process.env.PORT_API, () => {
    console.log("Sistema sendo executado com sucesso!")
})
