const Medicamento = require('../../models/medicamento');

async function listaMedicamento(request, response) {
    try {
        const filtros = request.query
         // query param /api/medicamentos?status=PARAMETRO 
        
        if(filtros.tipo) {

            if (!["CONTROLADO","NAOCONTROLADO",].includes(filtros.tipo)) {
            
            return response
            .status(400)
            .json({ message: 'Medicação controlada ou não controlada'})
            }
            const medicamentos = await Medicamento.findAll(
                {
                    where: {
                        tipo: filtros.tipo
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