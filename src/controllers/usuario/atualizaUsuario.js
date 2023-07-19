const Usuario = require("../../models/usuario");

async function atualizaUsuario(request, response) {
  try {
    const usuario = await Usuario.findByPk(request.params.id);

    if (!usuario)
      return response.status(404).json({ message: "Usuário não localizado" });

    //update nome, sobrenome, telefone, genero...só mudanças nesses campos é que vão atualizar
    await Usuario.update(
      {
        nome: request.body.nome || usuario.nome,
        sobrenome: request.body.sobrenome || usuario.sobrenome,
        genero: request.body.genero || usuario.genero, 
        telefone: request.body.telefone || usuario.telefone,
      },
      {
        where: {
          id: request.params.id,
        },
      }
    );

    const usuarioAtualizado = await Usuario.findByPk(request.params.id)
        response.json(usuarioAtualizado)
    } catch (error) {
        response
        .status(400)
        .json({message: "Não foi possível processar a requisição"})
    }
  
}

module.exports = atualizaUsuario;
