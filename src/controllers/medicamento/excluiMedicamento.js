const Medicamento = require("../../models/medicamento");

async function excluiMedicamento(request, response) {
  try {
    const medicamento_id = request.params.id;
    const medicamento = await Medicamento.findByPk(medicamento_id);

    if (!medicamento) {
      return response
        .status(404)
        .json({message: "Este medicamento não existe"});
    };

    await medicamento.destroy();

    return response
      .status(204)
      .json();

  } catch (error) {
    response
    .status(500)
    .json({ message: "Não foi possível processar a requisição" });
  };
};

module.exports = excluiMedicamento;