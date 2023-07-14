const yup = require("yup"); //utilizando yup para validação de dados

const validacao = yup.object().shape({
  usuario_id: yup.number("Deve ser um número").required("Obrigatório"),
  razao_social: yup.string().required("Razão social é obrigatório"),
  cnpj: yup.string().required("CNPJ é obrigatório"),
  nome_fantasia: yup.string().required("Nome Fantasia é obrigatório"),
  email: yup.string().email().required("Email é obrigatório"),
  telefone: yup.string(),
  celular: yup.string().required("Celular é obrigatório"),
  cep: yup.string().required("CEP é obrigatório"),
  logradouro: yup.string().required("Logradouro é obrigatório"),
  numero: yup.string().required("Número é obrigatório"),
  bairro: yup.string().required("Bairro é obrigatório"),
  cidade: yup.string().required("Cidade é obrigatório"),
  estado: yup.string().required("Estado é obrigatório"),
  complemento: yup.string(),
  latitude: yup.string(),
  longitude: yup.string(),
  status: yup
  .mixed([
    'ATIVO',
    'INATIVO'])
  .notRequired()
  .default('ATIVO'),
});

function validaDeposito(request, response, next) {
  //
  try {
    validacao.validateSync(request.body);
    next();
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}

module.exports = validaDeposito;
