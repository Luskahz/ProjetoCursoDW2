import {
  criarEmprestimo,
  validarEmprestimo,
} from "../../models/emprestimoModel.js";

export default async function createEmprestimoController(req, res, next) {
  try {
    const dados = req.body;
    const {
      success,
      error,
      data: emprestimoValidado,
    } = validarEmprestimo(dados);
    if (!success) {
      return res.status(400).json({
        message: "Erro ao registrar empréstimo, verifique os dados!",
        errors: error.flatten().fieldErrors,
      });
    }
    const result = await criarEmprestimo(emprestimoValidado);
    return res.status(201).json({
      message: "Empréstimo registrado com sucesso!",
      emprestimo: result,
    });
  } catch (error) {
    next(error);
  }
}
