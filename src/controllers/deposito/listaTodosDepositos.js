const Deposito = require('../../models/deposito');

async function listaDeposito(request, response) {
    try {
        const filtros = request.query 
        
        if(filtros.status) {

            if (!["ATIVO","INATIVO",].includes(filtros.status)) {
            
            return response
            .status(400)
            .json({ message: 'O status deve ser ATIVO ou INATIVO'})
            }
            const depositos = await Deposito.findAll(
                {
                    where: {
                        status: filtros.status
                    }
                }
            ) 
            response
            .status(200)
            .json(depositos) 
        } else {
            const depositos = await Deposito.findAll() 
            response
            .status(200)
            .json(depositos) 
        }

    } catch (error) {
        return response
        .status(500) 
        .json({message: "Não foi possível processar a requisição"})
    }
}

module.exports = listaDeposito