import { deletarLivro } from "../../models/livroModel.js"
import { livroValidator } from "../../schemas/livroSchema.js"

export default async function deleteLivroController(req, res, next) {
  try {
    const { id } = req.params
    const livro = { id: +id }
    const { success, error, data } = livroValidator(
      livro,
      (partial = {
        titulo: true,
        autor: true,
        ano: true
      })
    )

    if (!success) {
      return res.status(400).json({
        message: "Erro ao deletar livro, verifique o id",
        errors: error.flatten().fieldErrors,
      })
    }
    const result = await deletarLivro(data.id)
    if (!result) {
      return res.status(404).json({
        message: "Livro não encontrado!",
      })
    }

    return res.json({
      message: `Livro ID ${id} excluído com sucesso!`,
      livro: result,
    })
  } catch (error) {
    next(error)
  }
}
