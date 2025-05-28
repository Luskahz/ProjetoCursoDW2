import { listarLivros } from "../../models/livroModel.js";

export default async function listLivrosController(req, res, next) {
    try {
        const livros = await listarLivros();
        res.json(livros);

        } catch (err) { next(err); }

        }
    