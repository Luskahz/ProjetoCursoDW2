import { criarLivro } from "../../models/livroModel.js"
import { livroValidator } from "../../schemas/livroSchema.js"

export default async function createLivroController(req, res, next) {
  try {
    const dados = req.body
    const { success, error, data: livroValidado } = livroValidator(dados, {id: true})
    if (!success) {
      return res.status(400).json({
        message: "Erro ao cadastrar livro, verifique os dados!",
        errors: error.flatten().fieldErrors,
      })
    }
    const result = await criarLivro(livroValidado)
    return res.status(201).json({
      message: "Livro cadastrado com sucesso!",
      livro: result,
    })
  } catch (error) {
    next(error)
  }
}
