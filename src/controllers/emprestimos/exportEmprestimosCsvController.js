import { listarEmprestimos } from "../../models/emprestimoModel.js";

import { parse } from "json2csv";

export default async function exportEmprestimosCsvController(req, res, next) {
  try {
    const emprestimos = await listarEmprestimos();
    const data = emprestimos.map((e) => ({
      id: e.id,
      usuario: e.usuario.nome,
      livro: e.livro.titulo,
      dataRetirada: e.dataRetirada,
      dataDevolucao: e.dataDevolucao || "",
    }));
    const csv = parse(data);
    res.header("Content-Type", "text/csv");
    res.attachment("emprestimos.csv");
    res.send(csv);
  } catch (err) {
    next(err);
  }
}
