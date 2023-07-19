const Usuario = require("../../models/usuario");
const yup = require('yup');

async function atualizaSenhaUsuario(request, response) {
  try {
    const usuario = await Usuario.findByPk(request.params.id);

    if (!usuario)
      return response.status(404).json({ message: "Usuário não localizado" });

    const schema = yup.object().shape({
      senha: yup
        .string()
        .required("Senha é obrigatório")
        .min(8, "A senha deve ter pelo menos 8 caracteres")
        .matches(
          /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/,
          "A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial"
        ),
    });

    // Verifica se os campos obrigatórios estão presentes e têm valores válidos
    await schema.validate(request.body, { abortEarly: false });

    await Usuario.update(
      {
        senha: request.body.senha,
      },
      {
        where: {
          id: request.params.id,
        },
      }
    );

    response.status(204).end();
  } catch (error) {
    console.error("Não foi possível processar a requisição", error.message);
    response.status(400).json({ message: "Dados inválidos para atualização da senha do usuário" });
  }
}

module.exports = atualizaSenhaUsuario;
