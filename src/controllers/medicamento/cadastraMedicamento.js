const Medicamento = require("../../models/medicamento");

async function cadastraMedicamento(request, response) {
  try {
    const dadosMedicamento = {
      usuario_id: request.body.usuario_id,
      deposito_id: request.body.deposito_id,
      nome_medicamento: request.body.nome_medicamento,
      nome_laboratorio: request.body.nome_laboratorio,
      descricao: request.body.descricao,
      dosagem: request.body.dosagem,
      unidade_dosagem: request.body.unidade_dosagem,
      tipo: request.body.tipo,
      preco_unitario: request.body.preco_unitario,
      quantidade: request.body.quantidade,
    };

    const MedicamentoExiste = await Medicamento.findOne({
      where: { nome_medicamento: dadosMedicamento.nome_medicamento },
    });

    if (MedicamentoExiste)
      return response
        .status(409)
        .json({ message: "Medicamento já cadastrado" });

    const novoMedicamento = await Medicamento.create(dadosMedicamento);
    return response.status(201).json(novoMedicamento);
  } catch (error) {
    console.error("Não foi possível processar a requisição", error.message);
    response
      .status(500)
      .json({ message: "Não foi possível processar a requisição" });
  }
}

module.exports = cadastraMedicamento;
