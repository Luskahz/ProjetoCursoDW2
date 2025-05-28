import { listarEmprestimos } from "../../models/emprestimoModel.js";

export default async function listEmprestimosController(req, res, next) {
  try {
    const emprestimos = await listarEmprestimos();
    res.json(emprestimos);
  } catch (err) {
    next(err);
  }
}
