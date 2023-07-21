
# Projeto Backend [LABPHARMACY 💊]

A LABPharmacy Inc, uma renomada empresa do ramo de tecnologia farmacêutica, está expandindo seus serviços. Por conta da expansão, o time de gestão necessita da criação de um sistema online, intitulado Pharmacy Central System (PCS), para gerenciamento de depósitos e medicamentos. Por conta da participação no projeto de front-end, o seu perfil chamou a atenção dos gestores, para agora criar o back-end do sistema que deverá ser codificado em Node, utilizando o framework Express.js com o uso do banco de dados PostgreSQL.

A LABPharmacy Inc deseja criar a API Rest da aplicação Pharmacy Central System (PCS), um software para gestão de depósitos e medicamentos, que será utilizado para o controle de estoque dos medicamentos de hospitais e postos de saúde.





## ❤️ Começando ❤️
Após fazer o clone [https://github.com/karolrdg/ProjetoBackendLab365.git] ou o download do código na sua máquina, necessário dar um **npm install** no terminal e logo após, **npm start** que irá inicializar o nodemon.
* Banco de dados nesse projeto foi criado com o nome de **projeto_pcsdb**.

## Demonstração com imagens
* No caso que vai ser apresentado, foi ultilizada a porta 3001 e o Thunder Client para realizar os testes, mas pode ser utilizado também: Insomnia, Postman entre outros :D

### S01 - Cadastro de Usuário
#### HTTP POST no path /api/usuarios
##### HTTP Status Code 201 (CREATED)
* Usuário cadastrado 
![imagem1](https://raw.githubusercontent.com/karolrdg/ProjetoBackendLab365/main/src/img/usercreated.jpg?token=GHSAT0AAAAAAB5IV2F4EQAS6POGOXRVXPOCZF2B7AA)
##### HTTP Status Code 400 (Bad Request)
* Dados inválidos
![imagem2](https://raw.githubusercontent.com/karolrdg/ProjetoBackendLab365/main/src/img/cpfinvalido.jpg?token=GHSAT0AAAAAAB5IV2F5Z3LWWD2WTJV3XIM6ZF2CAFA)
##### HTTP Status Code 409 (Conflict)
* CPF já cadastrado (usuário já no sistema)
![imagem3](https://raw.githubusercontent.com/karolrdg/ProjetoBackendLab365/main/src/img/conflict.jpg?token=GHSAT0AAAAAAB5IV2F4JWZUWQ4YCV7SGA6KZF2CA7Q)

### S02 - Login do Usuário
#### HTTP POST /usuarios/login
##### HTTP Status Code 200 (Ok)
* Retornar um JSON informando o token
![imagem4](https://raw.githubusercontent.com/karolrdg/ProjetoBackendLab365/main/src/img/token.jpg?token=GHSAT0AAAAAAB5IV2F4CNOE2OWYVZHXBSTWZF2B4BQ)
* Token validado (http://localhost:3001/user)
![imagem5](https://raw.githubusercontent.com/karolrdg/ProjetoBackendLab365/main/src/img/tokenvalido.jpg?token=GHSAT0AAAAAAB5IV2F4CTFG5N56MF5HCTT2ZF2CD6Q)
#### HTTP POST /usuarios/login
##### HTTP Status Code 400 (Bad Request)
* Email ou senha inválidos
![imagem6](https://raw.githubusercontent.com/karolrdg/ProjetoBackendLab365/main/src/img/emailinva.jpg?token=GHSAT0AAAAAAB5IV2F5BLMGZDB5NHUDGCIQZF2CFAQ)

### S03 - Atualização dos dados de Usuário
#### HTTP PATCH no path /api/usuarios/{identificador}
##### HTTP Status Code 200 (Ok)
* Dados atualizados - *ANTES*
![imagem7](https://raw.githubusercontent.com/karolrdg/ProjetoBackendLab365/main/src/img/updatedadosantes.jpg?token=GHSAT0AAAAAAB5IV2F472JSMCOUF5EN5BZEZF2A7DA)
* Dados atualizados (Campos: Nome, Sobrenome, Gênero e Telefone) - *DEPOIS*
![imagem8](https://raw.githubusercontent.com/karolrdg/ProjetoBackendLab365/main/src/img/updatedadosdepois.jpg?token=GHSAT0AAAAAAB5IV2F4P5S7XDECO75VS5WMZF2A7XA)
##### HTTP Status Code 400 (Bad Request)
* Dados inválidos
![imagem9](https://raw.githubusercontent.com/karolrdg/ProjetoBackendLab365/main/src/img/400.jpg?token=GHSAT0AAAAAAB5IV2F4FAWLTD3WRH6OTJDEZF2BORA)
##### HTTP Status Code 404 (Not Found) 
* id 20 não se encontra no banco de dados, o usuário em questão foi cadastrado com o id 4
![imagem10](https://raw.githubusercontent.com/karolrdg/ProjetoBackendLab365/main/src/img/404.jpg?token=GHSAT0AAAAAAB5IV2F4W5XYBFAF3F3GGJSIZF2BQXA)






EM DESENVOLVIMENTO

