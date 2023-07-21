const Medicamento = require("../../models/medicamento");

async function atualizaMedicamento(request, response) {
  try {
    const medicamento = await Medicamento.findByPk(request.params.id);

    if (!medicamento)
      return response
        .status(404)
        .json({ message: "Medicamento não localizado" });

    const { descricao, preco_unitario, quantidade } = request.body;

    if (!descricao || !preco_unitario || !quantidade) {
      return response
        .status(400)
        .json({
          message:
            "Dados inválidos. Certifique-se de enviar a descrição, preço unitário e quantidade corretamente.",
        });
    }
    //campos que podem ser alterados
    await Medicamento.update(
      {
        descricao: descricao || medicamento.descricao,
        preco_unitario: preco_unitario || medicamento.preco_unitario,
        quantidade: quantidade || medicamento.quantidade,
      },
      {
        where: {
          id: request.params.id,
        },
      }
    );

    const medicamentoAtualizado = await Medicamento.findByPk(request.params.id);
    response.json({
      message: "Medicação alterada com sucesso!",
      medicamento: medicamentoAtualizado,
    });
  } catch (error) {
    console.error("Não foi possível processar a requisição", error.message);
    response
      .status(500)
      .json({ message: "Não foi possível processar a requisição" });
  }
}

module.exports = atualizaMedicamento;
