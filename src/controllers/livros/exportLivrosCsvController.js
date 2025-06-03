import { listarLivros } from "../../models/livroModel.js";
import { parse } from "json2csv";

export default async function exportLivrosCsvController(req, res, next) {
  try {
    const livros = await listarLivros();
    const data = livros.map((l) => ({
      id: l.id,
      titulo: l.titulo,
      autor: l.autor,
      ano: l.ano,
      usuarioId: l.usuarioId,
    }));
    const csv = parse(data);
    res.header("Content-Type", "text/csv");
    res.attachment("livros.csv");
    res.send(csv);
  } catch (err) {
    next(err);
  }
}
