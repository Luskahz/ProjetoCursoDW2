import { obterEmprestimo } from "../../models/emprestimoModel.js";
import { emprestimoValidator } from "../../schemas/emprestimoSchema.js";

export default async function getEmprestimoController(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);
    const { success, error } = emprestimoValidator(id, {
      usuarioId: true,
      livroId: true,
      dataRetirada: true,
    });
    if (!success) {
      return res.status(400).json({
        message: "Erro ao obter imprestimo, id invalido!",
        errors: error.flatten().fieldErrors,
      });
    }
    const emprestimo = await obterEmprestimo(id);
    if (!emprestimo) {
      return res.status(404).json({
        message: "Empréstimo não encontrado!",
      });
    }
    return res.status(200).json({
      message: "Empréstimo encontrado com sucesso!",
      emprestimo,
    });
  } catch (err) {
    next(err);
  }
}
