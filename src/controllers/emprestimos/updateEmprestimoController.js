import { atualizarEmprestimo } from "../../models/emprestimoModel.js"
import { emprestimoValidator } from "../../schemas/emprestimoSchema.js"

export default async function updateEmprestimoController(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10)//preciso do id no parametro
    if (isNaN(id) || id <= 0) {
      return res.status(400).json({
        message: "ID inválido!",
      })
    } 
    const parsed = emprestimoValidator(req.body, {id: true})//e preciso do id nos dados, no json
    if (!parsed.success){
      return res.status(400).json({
        message: "Erro ao atualizar empréstimo, verifique os dados!",
        errors: parsed.error.flatten().fieldErrors,
      })
    }
      
    const emprestimo = await atualizarEmprestimo(id, parsed.data)
    if (!emprestimo) {
      return res.status(404).json({
        message: "Empréstimo não encontrado!",
      })
    }
    return res.status(200).json({
      message: "Empréstimo atualizado com sucesso!",
      emprestimo,
    })
  } catch (err) {
    next(err)
  }
}
