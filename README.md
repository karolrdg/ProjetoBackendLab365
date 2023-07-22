
# Projeto Backend [LABPHARMACY 💊]

A LABPharmacy Inc, uma renomada empresa do ramo de tecnologia farmacêutica, está expandindo seus serviços. Por conta da expansão, o time de gestão necessita da criação de um sistema online, intitulado Pharmacy Central System (PCS), para gerenciamento de depósitos e medicamentos. Por conta da participação no projeto de front-end, o seu perfil chamou a atenção dos gestores, para agora criar o back-end do sistema que deverá ser codificado em Node, utilizando o framework Express.js com o uso do banco de dados PostgreSQL.

A LABPharmacy Inc deseja criar a API Rest da aplicação Pharmacy Central System (PCS), um software para gestão de depósitos e medicamentos, que será utilizado para o controle de estoque dos medicamentos de hospitais e postos de saúde.





## ❤️ Começando ❤️▶️
Após fazer o clone [https://github.com/karolrdg/ProjetoBackendLab365.git] ou o download do código na sua máquina, necessário dar um **npm install** no terminal e logo após, **npm start** que irá inicializar o nodemon.
* Banco de dados nesse projeto foi criado com o nome de **projeto_pcsdb**.

## Demonstração com imagens
* No caso que vai ser apresentado, foi ultilizada a porta 3001 e o Thunder Client para realizar os testes, mas pode ser utilizado também: Insomnia, Postman entre outros :D
## Usuário 👽
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

## Depósito 📦
### S07 - Cadastro de Depósito
#### HTTP POST no path /api/depositos
##### HTTP Status Code 201 (CREATED)
* Depósito cadastrado
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/9b1f6dee-5bc3-4c1f-8660-0a97a7f80849)
##### HTTP Status Code 400 (Bad Request)
* Dados inválidos
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/12d517d3-adbe-42b9-aa0a-10cc4bc7a5b5)
##### HTTP Status Code 409 (Conflict)
* CNPJ ou Razão Social já cadastrados
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/b28e1521-ffe3-4621-8818-1ead8bc7e10a)

### S08 - Atualização dos dados de Depósitos
#### HTTP PATCH no path /api/depositos/{identificador}
##### HTTP Status Code 204 (No Content)
* Campos pra serem atualizados: Nome Fantasia, E-mail, Telefone, Celular e Endereço...
**IMPORTANTE ⬇️**
* No projeto consta "No corpo da request, informar objeto json com os campos que podem ser alterados neste endpoints, são eles: Nome Fantasia, E-mail, Telefone, Celular e Endereço". Sendo endrereço composto por: CEP, Logradouro, Número, Bairro, Cidade, Estado e Complemento, por tanto, eliminei o campo endereço para não ficar repetido, já que os campos abaixo também é um endereço!
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/da84c196-e8ce-416a-a5dc-0dae91120973)

##### HTTP Status Code 400 (Bad Request)
* Dados inválidos
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/0f734d2a-aeb6-4657-bdf6-ad54addcf357)

##### HTTP Status Code 404 (Not Found)
* !encontrado
  ![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/8fe8d362-e860-4da6-9c2d-b6a4fcd9b966)

### S09 - Atualização do Status do Depósito no Sistema
#### HTTP PATCH no path /api/depositos/{identificador}/status
##### HTTP Status Code 204 (No Content) - 200
*ANTES ATIVO*
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/e5653b8b-d099-4f9e-a19a-d7e0620ed387)

*DEPOIS INATIVO*
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/2bc56f6c-e7c0-4839-8995-e10822229b9c)


##### HTTP Status Code 400 (Bad Request)
* Dados inválidos
* O status tem que ser *EXATAMENTE* "ATIVO" OU "INATIVO"
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/9b03261c-75dc-421a-b7fe-20d9d6907541)

##### HTTP Status Code 404 (Not Found)
* !encontrado
 ![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/e87346ec-9b6c-4ea3-830b-1aece598808a)

### S10 - Listagem de Depósitos
#### HTTP GET no path /api/depositos
* Valores possíveis para serem informados na requisição = ATIVO e INATIVO
* Exemplo de path com o query param informado:
*/api/depositos?status=ATIVO*
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/d84f8b3b-3ad3-465e-93b9-551f763c683c)
* No banco de dados nesse momento em questão, só tinham dois depositos cadastrados, após a exclusão de um para mostrar **mais a frente**. Sendo assim, constava os dois, como *ATIVO* e INATIVO. Ex:
  
  ![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/94a72cb6-4599-4bc1-9a78-057363db229c)
  
##### HTTP Status Code 200 (OK
* Agora a listagem com o uso do *GET* mostrando todos os depósitos no sistema, sendo 2.
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/1543fc76-df1d-4872-9ed8-7a8fbe74c1a7)

### S11 - Listagem de Depósito pelo identificador
#### HTTP GET no path /api/depositos/{identificador}
##### HTTP Status Code 200 (OK)
* Dados do depósito
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/c78a9ecb-7693-4c02-b631-e8e3ac5e8927)
##### HTTP Status Code 404 (Not Found)
* !encontrado
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/5e0f8cdf-59a2-4df1-8239-8c7b63079b6c)

### S12 - Exclusão de Depósito
#### HTTP DELETE no path /api/depositos/{identificador}
##### HTTP Status Code 204 (No Content)
* Após ser *deletado* do banco de dados, como foi dito anteriormente (S10), o terceiro depósito cadastrado foi excluído para mostrar ele em funcionamento. **Lembrando** que podem ser cadastrados quantos ítens forem necessários, em questão, nesse exemplo, foram 3 e um deletado, como visto aqui. *Somente para fins de testes*, não exclusivamente em ordem
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/ff4e1744-5670-4ed8-bb1d-1fcf468ca49a)
##### HTTP Status Code 404 (Not Found)
* O depósito em questão de id 8 que fora excluído antes, já não encontrado mais no sistema, pois foi excluído no banco de dados
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/f698af7c-c971-4a04-88bc-9decb9e116ff)


  


 
 




















EM DESENVOLVIMENTO

