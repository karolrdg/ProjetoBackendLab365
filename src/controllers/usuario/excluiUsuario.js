//operação de exclusão de usuário no banco de dados - opcional
const Usuario = require("../../models/usuario");

async function excluiUsuario(request, response) {
  try {
    const usuario_id = request.params.id;
    const usuario = await Usuario.findByPk(usuario_id);

    if (!usuario) {
      return response
        .status(404)
        .json({ message: "Este usuário não existe" });
    }

    await usuario.destroy();

      return response
      .status(204)
      .json({ message: "Usuário excluído com sucesso" });

  } catch (error) {
    return response
      .status(500)
      .json({ message: "Não foi possível processar a requisição" });
  }
}

module.exports = excluiUsuario;
