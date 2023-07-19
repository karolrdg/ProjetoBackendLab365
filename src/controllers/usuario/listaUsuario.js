const Usuario = require('../../models/usuario');

async function listaUsuario(request, response) {
  try {
    const usuario = await Usuario.findByPk(request.params.id, {
      attributes: { exclude: ['senha'] } // Exclui o campo de senha da resposta
    });

    if (!usuario)
      return response.status(404).json({ message: "Usuário não encontrado" });

    return response.status(200).json(usuario);
  } catch (error) {
    console.error("Não foi possível processar a requisição", error.message);
    return response.status(500).json({ message: "Não foi possível processar a requisição" });
  }
}

module.exports = listaUsuario;
