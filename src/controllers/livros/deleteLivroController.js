import { deletarLivro } from "../../models/livroModel.js";

export default async function deleteLivroController(req, res, next) {
    try {
        const id = parseInt(req.params.id, 10);
        await deletarLivro(id);
        res.sendStatus(204);

        } catch (err) { next(err); }

        }
    