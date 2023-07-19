const Deposito = require('../../models/deposito');

async function atualizaStatusDeposito(request, response) {
    try {
        const id = request.params.id 
        const deposito = await Deposito.findByPk(id)

        if(!deposito) {
            return response
            .status(404)
            .json({message: 'Usuário não encontrado'})
        }

        if (![
            'ATIVO',
            'INATIVO']
            .includes(request.body.status)) {
            return response
            .status(400)
            .json({ message: 'O status deve ser ATIVO ou INATIVO' })
        }


        deposito.status = request.body.status

        await deposito.save()

        return response.json(deposito)
        
    } catch (error) {
        return response
        .status(500)
        .json({ message: 'Não foi possível processar a requisição' })
    }
}


module.exports = atualizaStatusDeposito