const Deposito = require('../../models/deposito');

async function listaDeposito(request, response) {
    try {
        
        const depositos = await Deposito.findAll()

        if(!depositos) return response
        .status(404) //not found
        .json({message: "Lista de depositos sem dados"})

        return response
        .status(200) //ok
        .json(depositos)

    } catch (error) {
        return response
        .status(500) 
        .json({message: "Não foi possível processar a requisição"})
    }
}

module.exports = listaDeposito