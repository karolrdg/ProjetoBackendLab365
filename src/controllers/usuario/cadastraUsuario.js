const Usuario = require("../../models/usuario");

async function cadastraUsuario(request, response) {
  try {
    const dadosUsuario = {
      nome: request.body.nome,
      sobrenome: request.body.sobrenome,
      genero: request.body.genero,
      data_nascimento: request.body.data_nascimento,
      cpf: request.body.cpf,
      telefone: request.body.telefone,
      email: request.body.email,
      senha: request.body.senha,
      status: request.body.status,
    };

    const usuarioExiste = await Usuario.findOne({
      where: { cpf: dadosUsuario.cpf },
    });

    if (usuarioExiste)
      return response.status(409).json({ message: "Usuário já cadastrado" });

    const novoUsuario = await Usuario.create(dadosUsuario);
    return response.status(201).json(novoUsuario);
  } catch (error) {
    console.error("Requisição não processada", error.message);
    response
      .status(400)
      .json({ message: "Requisição não processada" });
  }
}

module.exports = cadastraUsuario;
