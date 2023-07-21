
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
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/05e35b77-7b79-435b-be08-d31e7bbdd0bd)

##### HTTP Status Code 400 (Bad Request)
* Dados inválidos
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/47c9953f-adaf-48a7-9fdf-37babeb25540)

##### HTTP Status Code 409 (Conflict)
* CPF já cadastrado (usuário já no sistema)
![imagem3](https://github.com/karolrdg/ProjetoBackendLab365/blob/main/src/img/conflict.jpg?raw=true)

### S02 - Login do Usuário
#### HTTP POST /usuarios/login
##### HTTP Status Code 200 (Ok)
* Retornar um JSON informando o token
![imagem4](https://github.com/karolrdg/ProjetoBackendLab365/blob/main/src/img/token.jpg?raw=true)
* Token validado (http://localhost:3001/user)
![imagem5](https://github.com/karolrdg/ProjetoBackendLab365/blob/main/src/img/tokenvalido.jpg?raw=true)
#### HTTP POST /usuarios/login
##### HTTP Status Code 400 (Bad Request)
* Email ou senha inválidos
![imagem6](https://github.com/karolrdg/ProjetoBackendLab365/blob/main/src/img/emailinva.jpg?raw=true)

### S03 - Atualização dos dados de Usuário
#### HTTP PATCH no path /api/usuarios/{identificador}
##### HTTP Status Code 200 (Ok)
* Dados atualizados - *ANTES*
![imagem7](https://github.com/karolrdg/ProjetoBackendLab365/blob/main/src/img/updatedadosantes.jpg?raw=true)
* Dados atualizados (Campos: Nome, Sobrenome, Gênero e Telefone) - *DEPOIS*
![imagem8](https://github.com/karolrdg/ProjetoBackendLab365/blob/main/src/img/updatedadosdepois.jpg?raw=true)
##### HTTP Status Code 400 (Bad Request)
* Dados inválidos
![imagem9](https://github.com/karolrdg/ProjetoBackendLab365/blob/main/src/img/400.jpg?raw=true)
##### HTTP Status Code 404 (Not Found) 
* id 20 não se encontra no banco de dados, o usuário em questão foi cadastrado com o id 4
![imagem10](https://github.com/karolrdg/ProjetoBackendLab365/blob/main/src/img/404.jpg?raw=true)

### S04 - Atualização do Status do Usuário no Sistema
#### HTTP PATCH no path /api/usuarios/{identificador}/status
##### HTTP Status Code 200 (Ok)
* Status atualizado (antes estava ativo, como dá pra notar na primeira imagem dessa documentação)
![imagem11](https://github.com/karolrdg/ProjetoBackendLab365/blob/main/src/img/userstatus200.jpg?raw=true)
##### HTTP Status Code 400 (Bad Request)
* Dados inválidos
![imagem12](https://github.com/karolrdg/ProjetoBackendLab365/blob/main/src/img/bad400status.jpg?raw=true)
##### HTTP Status Code 404 (Not Found) 
* !encontrado id (id 8 não está no banco de dados)
![imagem13](https://github.com/karolrdg/ProjetoBackendLab365/blob/main/src/img/notfoundstatususer.jpg?raw=true)

### S05 - Atualização de Senha do Usuário
#### HTTP PATCH no path /api/usuarios/{identificador}/senha
##### HTTP Status Code 204 (No Content)
**IMPORTANTE ⬇️**
* A senha deve ter pelo menos 8 caracteres
* A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial
   ![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/fdf76511-7315-47c0-8048-d918897b140d)
  
##### HTTP Status Code 400 (Bad Request)
* Observe que a senha foi digitada como "err", sendo assim, não cumpre os requisitos
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/fc00b9e0-a4ab-4f74-bbaf-b86cedbdafa9)

##### HTTP Status Code 404 (Not Found)
* !encontrado id (id 8 não está no banco de dados
  ![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/b5108541-ffe2-4893-a9e1-e25808e01f39)



### S06 - Listagem de Usuário pelo identificador
#### HTTP GET no path /api/usuarios/{identificador}
##### HTTP Status Code 200 (OK)
* Dados do usuário, *exceto a senha*
**OBS**: Foi utilizado o seguinte trecho de código para "excluir' a senha: *const usuario = await Usuario.findByPk(request.params.id, {
      attributes: { exclude: ['senha'] } // Exclui o campo de senha da resposta});*
  ![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/a33afa2b-8e8c-4d89-90f7-65e2181d430b)
  
 
##### HTTP Status Code 404 (Not Found)
* !encontrado
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/2bbdafa1-3afe-446b-8891-b2137012ffe3)
 
 




















EM DESENVOLVIMENTO

