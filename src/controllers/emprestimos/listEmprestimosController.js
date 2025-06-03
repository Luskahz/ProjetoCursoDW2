import { listarEmprestimos } from "../../models/emprestimoModel.js"

export default async function listEmprestimosController(req, res, next) {
  try {
    const emprestimos = await listarEmprestimos()
    if(!emprestimos || emprestimos.length === 0){
      return res.status(404).json({
        message: "Nenhum empréstimo encontrado!",
      })
    }
    return res.status(200).json({
      message: "Empréstimos encontrados com sucesso!",
      emprestimos,
    })
  } catch (err) {
    next(err)
  }
}
