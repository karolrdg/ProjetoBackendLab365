const Medicamento = require('../../models/medicamento');

async function listaMedicamento(request, response) {
    try {
        const medicamento_id = await Medicamento.findByPk(request.params.id)

        if(!medicamento_id) return response
        .status(404) 
        .json({message: "Medicamento não encontrado"})

        return response
        .status(200) 
        .json(medicamento_id)

    } catch (error) {
        return response
        .status(500) 
        .json({message: "Não foi possível processar a requisição"})
    }
}

module.exports = listaMedicamento