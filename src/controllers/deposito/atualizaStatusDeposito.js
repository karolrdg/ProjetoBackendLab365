const Deposito = require("../../models/deposito");

async function atualizaStatusDeposito(request, response) {
  try {
    const id = request.params.id;
    const deposito = await Deposito.findByPk(id);

    if (!["Ativo", "Inativo"].includes(request.body.status)) {
      return response
        .status(400)
        .json({ message: "O status deve ser Ativo ou Inativo" });
    }

    if (!deposito) {
      return response.status(404).json({ message: "Deposito não encontrado" });
    }

    deposito.status = request.body.status;

    await deposito.save();

    return response.json(deposito);
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Não possivel processar a solicitacao" });
  }
}

module.exports = atualizaStatusDeposito;
