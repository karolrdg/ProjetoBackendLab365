const Deposito = require("../../models/deposito");

async function cadastraDeposito(request, response) {
  try {
    const dadosDeposito = {
      usuario_id: request.body.usuario_id,
      razao_social: request.body.razao_social,
      cnpj: request.body.cnpj,
      nome_fantasia: request.body.nome_fantasia,
      email: request.body.email,
      telefone: request.body.telefone,
      celular: request.body.celular,
      cep: request.body.cep,
      logradouro: request.body.logradouro,
      numero: request.body.numero,
      bairro: request.body.bairro,
      cidade: request.body.cidade,
      estado: request.body.estado,
      complemento: request.body.complemento,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
      status: request.body.status,
    };

    const DepositoExiste = await Deposito.findOne({
      where: { cnpj: dadosDeposito.cnpj },
      where: { razao_social: dadosDeposito.razao_social}
    });

    if (DepositoExiste)
      return response.status(409).json({ message: "Deposito já cadastrado" });

    const novoDeposito = await Deposito.create(dadosDeposito);
    return response.status(201).json(novoDeposito);
  } catch (error) {
    console.error("Requisição não processada", error.message);
    response.status(500).json({ message: "Requisição não processada" });
  }
}

module.exports = cadastraDeposito;
