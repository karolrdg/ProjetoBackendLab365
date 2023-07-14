const Deposito = require("../../models/deposito");

async function excluiDeposito(request, response) {
  try {
    const deposito_id = request.params.id;
    const deposito = await Deposito.findByPk(deposito_id);

    if (!deposito) {
      return response
        .status(404)
        .json({message: "Este deposito não existe"});
    };

    await deposito.destroy();

    return response
      .status(204)
      .json();

  } catch (error) {
    response
    .status(500)
    .json({ message: "Não foi possível processar a requisição" });
  };
};

module.exports = excluiDeposito;