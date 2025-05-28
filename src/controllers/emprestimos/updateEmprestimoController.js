import {
  atualizarEmprestimo,
  validarEmprestimo,
} from "../../models/emprestimoModel.js";

export default async function updateEmprestimoController(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);
    const parsed = validarEmprestimo(req.body);
    if (!parsed.success)
      return res.status(400).json({ error: parsed.error.errors });
    const emprestimo = await atualizarEmprestimo(id, parsed.data);
    res.json(emprestimo);
  } catch (err) {
    next(err);
  }
}
