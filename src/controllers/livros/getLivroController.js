import { obterLivro } from "../../models/livroModel.js";
import { livroValidator } from "../../schemas/livroSchema.js";

export default async function getLivroController(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);//recebe o id apenas pelos parametros
    const { success, error } = livroValidator({ id }, { titulo: true, autor: true, ano: true, usuarioId: true });
    if (!success) {
      return res.status(400).json({
        message: "Erro ao obter livro, id inválido!",
        errors: error.flatten().fieldErrors,
      });
    }
    const livro = await obterLivro(id);
    if (!livro) {
      return res.status(404).json({
        message: "Livro não encontrado!",
      });
    }
    return res.status(200).json({
      message: "Livro encontrado com sucesso!",
      livro,
    });
  } catch (err) {
    next(err);
  }
}
