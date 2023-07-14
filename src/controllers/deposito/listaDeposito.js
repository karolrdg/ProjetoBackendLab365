const Deposito = require('../../models/deposito');

async function listaDeposito(request, response) {
    try {
        const deposito_id = await Deposito.findByPk(request.params.id)

        if(!deposito_id) return response
        .status(404) 
        .json({message: "Deposito não encontrado"})

        return response
        .status(200) 
        .json(deposito_id)

    } catch (error) {
        return response
        .status(500) 
        .json({message: "Não foi possível processar a requisição"})
    }
}

module.exports = listaDeposito