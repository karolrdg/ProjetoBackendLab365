const Usuario = require('../../models/usuario');

async function listaUsuario(request, response) {
    try {
        const filtros = request.query // query param /api/usuarios?status=PARAMETRO 
        
        if(filtros.status) {

            if (!["ATIVO","INATIVO",].includes(filtros.status)) {
            
            return response
            .status(400)
            .json({ message: 'O status deve ser ATIVO ou INATIVO'})
            }
            const usuarios = await Usuario.findAll(
                {
                    where: {
                        status: filtros.status
                    }
                }
            ) 
            response
            .status(200)
            .json(usuarios) 
        } else {
            const usuarios = await Usuario.findAll() 
            response
            .status(200)
            .json(usuarios) 
        }

    } catch (error) {
        return response
        .status(500) 
        .json({message: "Não foi possível processar a requisição"})
    }
}

module.exports = listaUsuario