const Usuario = require('../../models/usuario');

async function listaUsuario(request, response) {
    try {
        const usuario_id = await Usuario.findByPk(request.params.id)

        if(!usuario_id) return response
        .status(404) 
        .json({message: "Usuario não encontrado"})

        return response
        .status(200) 
        .json(usuario_id)

    } catch (error) {
        return response
        .status(500) 
        .json({message: "Não foi possível processar a requisição"})
    }
}

module.exports = listaUsuario