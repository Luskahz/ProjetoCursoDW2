import { obterEmprestimo } from "../../models/emprestimoModel.js";

export default async function getEmprestimoController(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);
    const emprestimo = await obterEmprestimo(id);
    if (!emprestimo) return res.sendStatus(404);
    res.json(emprestimo);
  } catch (err) {
    next(err);
  }
}
