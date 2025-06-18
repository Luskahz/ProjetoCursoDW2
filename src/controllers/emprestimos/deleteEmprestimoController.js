import { deletarEmprestimo } from "../../models/emprestimoModel.js"
import { emprestimoValidator } from "../../schemas/emprestimoSchema.js"

export default async function deleteEmprestimoController(req, res, next) {
  try {
    const { id } = req.params
    const emprestimo = { id: +id }
    const { success, error, data } = emprestimoValidator(emprestimo, { usuarioId: true, livroId: true, dataRetirada: true})

    if (!success) {
      return res.status(400).json({
        message: "Erro ao deletar empréstimo, verifique os dados!",
        errors: error.flatten().fieldErrors,
      })
    }

    const result = await deletarEmprestimo(data.id)

    if (!result) {
      return res.status(404).json({
        message: "Empréstimo não encontrado!",
      })
    }

    return res.json({
      message: `Empréstimo ID ${id} excluído com sucesso!`,
      emprestimo: result,
    })
  } catch (error) {
    if (
      error?.code === "P2025" &&
      error?.meta?.cause?.includes("Record to delete does not exist")
    ) {
      return res.status(404).json({
        message: "Empréstimo não encontrado!",
      })
    }
    next(error)
  }
}
