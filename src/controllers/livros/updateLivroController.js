import { atualizarLivro } from "../../models/livroModel.js"
import { livroValidator } from "../../schemas/livroSchema.js"

export default async function updateLivroController(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10)// espero o livro como parametro
    const livroParaValidar = { ...req.body, id } // adiciono o id ao body para validação
    const parsed = livroValidator(livroParaValidar) 
    if (!parsed.success) {
      return res.status(400).json({
        message: "Erro ao atualizar livro, verifique os dados!",
        errors: parsed.error.flatten().fieldErrors,
      })
    }

    const livro = await atualizarLivro(id, parsed.data)//atualização completa de todos os dados(incluindo id)
    if (!livro) {
      return res.status(404).json({
        message: "Livro não encontrado!",
      })
    }
    return res.status(200).json({
      message: "Livro atualizado com sucesso!",
      livro,
    })
  } catch (err) {
    next(err)
  }
}
