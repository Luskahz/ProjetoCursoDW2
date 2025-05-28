import { listarLivros } from "../../models/livroModel.js";

import { parse } from "json2csv";

export default async function exportLivrosCsvController(req, res, next) {
    try {
        const livros = await listarLivros();
        const csv = parse(livros);
        res.header("Content-Type", "text/csv");
        res.attachment("livros.csv");
        res.send(csv);

        } catch (err) { next(err); }

        }
    