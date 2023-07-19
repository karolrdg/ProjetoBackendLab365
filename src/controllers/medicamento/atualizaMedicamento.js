const Medicamento = require("../../models/medicamento");

async function atualizaMedicamento(request, response) {
  try {
    const medicamento = await Medicamento.findByPk(request.params.id);

    if (!medicamento)
      return response.status(404).json({ message: "Medicamento não localizado" });

    await Medicamento.update(
      {
        descricao: request.body.descricao || medicamento.descricao,
        preco_unitario: request.body.preco_unitario || medicamento.preco_unitario,
        quantidade: request.body.quantidade || medicamento.quantidade,
      },
      {
        where: {
          id: request.params.id,
        },
      }
    );

    const medicamentoAtualizado = await Medicamento.findByPk(request.params.id);
    response.json({ message: "Medicação alterada com sucesso!",
     medicamento: medicamentoAtualizado });
  } catch (error) {
    console.error("Não foi possível processar a requisição", error.message);
    response
      .status(500)
      .json({ message: "Não foi possível processar a requisição" });
  }
}

module.exports = atualizaMedicamento;
