import { deletarEmprestimo } from "../../models/emprestimoModel.js";

export default async function deleteEmprestimoController(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);
    await deletarEmprestimo(id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
}
