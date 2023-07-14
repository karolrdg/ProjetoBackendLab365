const yup = require("yup");
//yup é um modulo de validação de dados
const validacao = yup.object().shape({
    nome: yup
    .string("O nome deve ser uma string/texto")
    .required("Nome é obrigatório"),
    sobrenome: yup
    .string("O sobrenome deve ser uma string/texto")
    .required("Sobrenome é obrigatório"),
    genero: yup
    .string(),
    data_nascimento: yup
    .date()
    .required("Data de nascimento é obrigatório"),
    cpf: yup
    .string()
    .required('CPF é obrigatório')
    .matches(/^\d{11}$/, 'CPF inválido')
    .test('cpf', 'CPF inválido', (value) => {
      const cpf = value.replace(/\D/g, '');
      let sum;
      let rest;
      sum = 0;
      if (cpf === '00000000000') {
        return false;
      }
      for (let i = 1; i <= 9; i += 1) {
        sum += parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
      }
      rest = (sum * 10) % 11;
      if ((rest === 10) || (rest === 11)) {
        rest = 0;
      }
      if (rest !== parseInt(cpf.substring(9, 10), 10)) {
        return false;
      }
      sum = 0;
      for (let i = 1; i <= 10; i += 1) {
        sum += parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
      }
      rest = (sum * 10) % 11;
      if ((rest === 10) || (rest === 11)) {
        rest = 0;
      }
      if (rest !== parseInt(cpf.substring(10, 11), 10)) {
        return false;
      }
      return true;
    }), //cpf validado com yu
    telefone: yup
    .string(),
    email: yup
    .string()
    .email("Email inválido")
    .required("Email é obrigatório"),
    senha: yup
    .string()
    .required("Senha é obrigatório")
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/,
      "A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial"
    ), //exemplo: senhasenhA1@

    status: yup
    .mixed([
      'ATIVO',
      'INATIVO'])
    .notRequired()
    .default('ATIVO'),
    })

function validaUsuario(request, response, next) {
//console.log("dado original", request.body)
//quando o validade sync encontra alguam inconsistencia ele lança uma excessão pr isso utilizar dentro do try 
//console.log(validacao.validateSync(request.body))
try {
    validacao.validateSync(request.body)
    next()
} catch (error) {
    //pega o texto do erro gerado no yup através do error.message
    //se der o response de erro a requisição é barrada no  middleware mesmo, não passa pra frente
response.status(400).json({message: error.message})
}
}

module.exports = validaUsuario;