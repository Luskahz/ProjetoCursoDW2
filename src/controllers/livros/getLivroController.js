import { obterLivro } from "../../models/livroModel.js";

export default async function getLivroController(req, res, next) {
    try {
        const id = parseInt(req.params.id, 10);
        const livro = await obterLivro(id);
        if (!livro) return res.sendStatus(404);
        res.json(livro);

        } catch (err) { next(err); }

        }
    