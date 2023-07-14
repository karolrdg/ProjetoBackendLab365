const Deposito = require('../../models/deposito');

async function atualizaDeposito(request, response) {
    try {
        const deposito = await Deposito.findByPk(request.params.id)

        if(!deposito) 
         return response
            .status(404)
            .json({message: "Deposito não localizado"})

        await Deposito.update({
            usuario_id: request.body.usuario_id || deposito.usuario_id,
            razao_social: request.body.razao_social || deposito.razao_social,
            cnpj: request.body.cnpj || deposito.cnpj,
            nome_fantasia: request.body.nome_fantasia || deposito.nome_fantasia, 
            email: request.body.email || deposito.email,
            telefone: request.body.telefone || deposito.telefone,
            celular: request.body.celular || deposito.celular,
            cep: request.body.cep || deposito.cep,
            logradouro: request.body.logradouro || deposito.logradouro,
            numero: request.body.numero || deposito.numero,
            bairro: request.body.bairro || deposito.bairro,
            cidade: request.body.cidade || deposito.cidade,
            estado: request.body.estado || deposito.estado,
            complemento: request.body.complemento || deposito.complemento,
            latitude: request.body.latitude || deposito.latitude,
            longitude: request.body.longitude || deposito.longitude,
            
           
        }, {
            where: {
                id: request.params.id
            }
        })
        
        const depositoAtualizado = await Deposito.findByPk(request.params.id)
        response.json(depositoAtualizado)
    } catch (error) {
        response
        .status(500)
        .json({message: "Não foi possível processar a requisição"})
    }
}

module.exports = atualizaDeposito