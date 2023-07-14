const Medicamento = require("../../models/medicamento");

async function atualizaStatusMedicamento(request, response) {
  try {
    const id = request.params.id;
    const medicamento = await Medicamento.findByPk(id);

    if (!["Ativo", "Inativo"].includes(request.body.status)) {
      return response
        .status(400)
        .json({ message: "O status deve ser Ativo ou Inativo" });
    }

    medicamento.estado_no_sistema = request.body.estado_no_sistema;

    await medicamento.save();

    return response.json(medicamento);
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Não foi possível processar a requisição" });
  }
}

module.exports = atualizaStatusMedicamento;
