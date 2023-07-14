const Medicamento = require('../../models/medicamento');

async function listaMedicamento(request, response) {
    try {
        const filtros = request.query
         // query param /api/medicamentos?status=PARAMETRO 
        
        if(filtros.status) {

            if (!["ATIVO","INATIVO",].includes(filtros.status)) {
            
            return response
            .status(400)
            .json({ message: 'O status deve ser ATIVO ou INATIVO'})
            }
            const medicamentos = await Medicamento.findAll(
                {
                    where: {
                        estado_no_sistema: filtros.status
                    }
                }
            ) 
            response
            .status(200)
            .json(medicamentos) 
        } else {
            const medicamentos = await Medicamento.findAll() 
            response
            .status(200)
            .json(medicamentos) 
        }

    } catch (error) {
        return response
        .status(500) 
        .json({message: "Não foi possível processar a requisição"})
    }
}

module.exports = listaMedicamento