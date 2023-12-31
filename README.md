
# Projeto Backend [LABPHARMACY 🏥]

A LABPharmacy Inc, uma renomada empresa do ramo de tecnologia farmacêutica, está expandindo seus serviços. Por conta da expansão, o time de gestão necessita da criação de um sistema online, intitulado Pharmacy Central System (PCS), para gerenciamento de depósitos e medicamentos. Por conta da participação no projeto de front-end, o seu perfil chamou a atenção dos gestores, para agora criar o back-end do sistema que deverá ser codificado em Node, utilizando o framework Express.js com o uso do banco de dados PostgreSQL.

A LABPharmacy Inc deseja criar a API Rest da aplicação Pharmacy Central System (PCS), um software para gestão de depósitos e medicamentos, que será utilizado para o controle de estoque dos medicamentos de hospitais e postos de saúde.


## Começando ▶️
Após fazer o clone [https://github.com/karolrdg/ProjetoBackendLab365.git] ou o download do código na sua máquina, necessário dar um **npm install** no terminal e logo após, **npm start** que irá inicializar o nodemon.
* Banco de dados nesse projeto foi criado com o nome de **projeto_pcsdb**.

## Demonstração com imagens
* No caso que vai ser apresentado, foi ultilizada a porta 3001 e o Thunder Client para realizar os testes, mas pode ser utilizado também: Insomnia, Postman entre outros :D
## Usuário 👽
### S01 - Cadastro de Usuário
#### HTTP POST no path /api/usuarios
##### HTTP Status Code 201 (CREATED)
* Usuário cadastrado 
![image](https://raw.githubusercontent.com/karolrdg/ProjetoBackendLab365/main/src/img/usercreated.jpg)

##### HTTP Status Code 400 (Bad Request)
* Dados inválidos
![image](https://github.com/karolrdg/ProjetoBackendLab365/blob/main/src/img/usercreated.jpg?raw=true)

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
⚠️**IMPORTANTE ⬇️**
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
⚠️**IMPORTANTE ⬇️**
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
* *ANTES ATIVO*
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/e5653b8b-d099-4f9e-a19a-d7e0620ed387)

* *DEPOIS INATIVO*
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
  
##### HTTP Status Code 200 (OK)
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

## Medicamento 💊
### S13 - Cadastro de Medicamento 
#### HTTP POST no path /api/medicamentos
##### HTTP Status Code 201 (CREATED)
* Medicamento cadastrado
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/3c46fe3b-06fc-4110-bbd4-90c360be1838)
##### HTTP Status Code 400 (Bad Request)
* Dados inválidos
* *Quantidade* foi deletada para o teste, e como era elemento obrigatório apareceu Bad Request
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/374bfabc-4bb2-410f-880d-a9d47ec25f64)
##### HTTP Status Code 409 (Conflict)
* Medicamento já cadastrado
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/9c914df8-fff5-48f5-9880-d1fa323e4d7a)

### S14 - Atualização dos dados de Medicamento
#### HTTP PATCH no path /api/medicamentos/{identificador}
##### HTTP Status Code 200 (OK)
* Dados atualizados
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/130038cd-cc2f-4b49-9a59-55dc0789a21f)
##### HTTP Status Code 400 (Bad Request)
* Dados inválidos
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/d4564c97-0470-4734-acdc-2d8b13d10a98)
##### HTTP Status Code 404 (Not Found)
* !encontrado (não existe medicamento com esse id no sistema/banco de dados
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/088137ba-6442-4cca-b0f4-6c5e710d9999)

### S15 - Listagem de Medicamentos
#### HTTP GET no path /api/medicamentos
* Valores possíveis para serem informados na requisição = CONTROLADO e NAOCONTROLADO
* Exemplo de path com o query param informado:
*/api/medicamentos?tipo=CONTROLADO*
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/97bd5d8e-fda7-486c-a464-0657828396e4)
*/api/medicamentos?tipo=NAOCONTROLADO*
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/621c4d81-1bc1-4004-b843-52940aba3f56)
##### HTTP Status Code 200 (OK)
* Todas medicações que tinham no banco de dados (3)
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/c7bb4589-dfa4-449d-8f09-71afd2aade81)

### S16 - Listagem de Medicamento pelo identificador
#### HTTP GET no path /api/medicamentos/{identificador}
##### HTTP Status Code 200 (OK)
* Listagem
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/22162609-f03a-458b-8c9f-8dfd9d5ca630)
##### HTTP Status Code 404 (Not Found)
* !encontrado
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/f3c5ff4f-a319-4c43-904e-1f90c54a7617)

### S17 - Exclusão de Medicamento
#### HTTP DELETE no path /api/medicamentos/{identificador}
##### HTTP Status Code 204 (No Content)
* Excluir
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/4ea7b88f-8f99-4a5e-8ac1-1db472df904a)
##### HTTP Status Code 404 (Not Found)
* !encontrado
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/a76ab180-1e04-40a4-9a56-24ffedb33f53)

### Considerações finais 🟢
Importante salientar que a migração do sistema para o banco de dados foi feita com **conexao.sync({ alter: true });**, por opção para esse projeto, não foi utilizado migrations (create table, por ex), sendo o resultado bastante parecido, mesmo que superficialmente com esse método mais prático e simples, mais uma vez, **para esse projeto**.
Foi utilizado Sequelize para fazer a interface com o postgres, no index.js as tabelas são criadas usando a função conexao.sync({alter: true}). Essa função verifica os modelos da pasta models (Usuário, Depósito e Medicamento) e cria as tabelas correspondentes no banco de dados, se elas ainda não existirem. Se as tabelas já existirem, ele faz alterações nas tabelas para refletir as mudanças nos modelos

**Exemplo do banco de dados em funcionamento usando o método que preferi ⬇️**
* Usuário
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/0eca1dcf-6e60-4a3a-b6d2-661313697909)

* Depósito
![image](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/e61d9f80-e71d-4bf9-ba3d-457ca3711672)

* Medicação
![](https://github.com/karolrdg/ProjetoBackendLab365/assets/87062322/3b9c240a-7e0d-46e6-92e6-23716ec07c9a)

##### Lembrando que as imagens acima são só uma base, pois não foram mostrados todos os dados no print, que não coube no corte em questão. O intuito foi mostrar que usando o método simples, foi útil para esse projeto.



  


 
 






















