import { atualizarLivro, validarLivro } from "../../models/livroModel.js";

export default async function updateLivroController(req, res, next) {
    try {
        const id = parseInt(req.params.id, 10);
        const parsed = validarLivro(req.body);
        if (!parsed.success) return res.status(400).json({ error: parsed.error.errors });
        const livro = await atualizarLivro(id, parsed.data);
        res.json(livro);

        } catch (err) { next(err); }

        }
    