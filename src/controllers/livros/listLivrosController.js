import { listarLivros } from "../../models/livroModel.js";

export default async function listLivrosController(req, res, next) {
  try {
    const livros = await listarLivros();
    if (!livros || livros.length === 0) {
      return res.status(404).json({
        message: "Nenhum livro encontrado!",
      });
    }
    return res.status(200).json({
      message: "Livros encontrados com sucesso!",
      livros,
    });
  } catch (err) {
    next(err);
  }
}
