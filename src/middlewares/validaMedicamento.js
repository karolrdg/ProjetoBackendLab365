const yup = require("yup");



//yup é um modulo de validação de dados
const validacao = yup.object().shape({
  usuario_id: yup.number(),
  deposito_id: yup.number(),
  nome_medicamento: yup.string().required(),
  nome_laboratorio: yup.string().required(),
  descricao: yup.string(),
  dosagem: yup.number().required(),
  unidade_dosagem: yup.string().required().oneOf(["mg", "mcg", "g", "mL", "%", "Outro"]),
  tipo: yup.string().required().oneOf(["Medicamento Controlado", "Medicamento Não Controlado"]),
  preco_unitario: yup.number()
  .transform((value) => parseFloat(value)),
  quantidade: yup.number().required(),
});

function validaMedicamento(request, response, next) {

try {
    validacao.validateSync(request.body)
    next()
} catch (error) {
  
response.status(400).json({message: error.message})
}
}

module.exports = validaMedicamento;