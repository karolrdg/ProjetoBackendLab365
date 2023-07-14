const Usuario = require('../../models/usuario');

async function atualizaStatusUsuario(request, response) {
    try {
        const id = request.params.id 
        const usuario = await Usuario.findByPk(id)

        if(!usuario) {
            return response
            .status(404)
            .json({message: 'Médico não encontrado'})
        }

        if (![
            'ATIVO',
            'INATIVO']
            .includes(request.body.status)) {
            return response
            .status(400)
            .json({ message: 'O status deve ser ATIVO ou INATIVO' })
        }


        usuario.status = request.body.status

        await usuario.save()

        return response.json(usuario)
        
    } catch (error) {
        return response
        .status(500)
        .json({ message: 'Não foi possível processar a requisição' })
    }
}


module.exports = atualizaStatusUsuario