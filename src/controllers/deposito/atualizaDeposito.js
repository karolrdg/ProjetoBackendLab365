const Deposito = require("../../models/deposito");

async function atualizaDeposito(request, response) {
  try {
    const deposito = await Deposito.findByPk(request.params.id);

    if (!deposito) {
      return response.status(404).json({ message: "Deposito não localizado" });
    }
    //no projeto consta "No corpo da request, informar objeto json com os campos que podem ser alterados neste endpoints, são eles: Nome Fantasia, E-mail, Telefone, Celular e Endereço". Sendo endrereço composto por: CEP, Logradouro, Número, Bairro, Cidade, Estado e Complemento, por tanto, eliminei o campo endereço para não ficar repetido, já que os campos abaixo também é um endereço!
    await Deposito.update(
      {
        nome_fantasia: request.body.nome_fantasia || deposito.nome_fantasia,
        email: request.body.email || deposito.email,
        telefone: request.body.telefone || deposito.telefone,
        celular: request.body.celular || deposito.celular,
        //endereço abaixo
        cep: request.body.cep || deposito.cep,
        logradouro: request.body.logradouro || deposito.logradouro,
        numero: request.body.numero || deposito.numero,
        bairro: request.body.bairro || deposito.bairro,
        cidade: request.body.cidade || deposito.cidade,
        estado: request.body.estado || deposito.estado,
        complemento: request.body.complemento || deposito.complemento,
      },
      {
        where: {
          id: request.params.id,
        },
      }
    );

    const depositoAtualizado = await Deposito.findByPk(request.params.id);
    response.json(depositoAtualizado);
  } catch (error) {
    response
      .status(400)
      .json({ message: "Não foi possível processar a requisição" });
  }
}

module.exports = atualizaDeposito;
