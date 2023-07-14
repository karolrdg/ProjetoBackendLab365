const Usuario = require("../../models/usuario")



async function atualizaSenhaUsuario(request, response) {
    try {
        const usuario = await Usuario.findByPk(request.params.id);

        if (!usuario)
            return response.status(404).json({ message: "Usuário não localizado" });

        await Usuario.update(
            {
                senha: request.body.senha || usuario.senha,
            },
            {
                where: {
                    id: request.params.id,
                },
            }
        );

        const usuarioAtualizado = await Usuario.findByPk(request.params.id);
        response.json({ message: "Usuário alterado com sucesso!", usuario: usuarioAtualizado });
    } catch (error) {
        console.error("Não foi possível processar a requisição", error.message);
        response.status(500).json({ message: "Não foi possível processar a requisição" });
    }
}

module.exports = atualizaSenhaUsuario;






