import { atualizarUsuario } from "../../models/usuarioModel.js";
import { usuarioValidator } from "../../schemas/usuarioSchema.js";

export default async function updateUsuarioController(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);
    const parsed = usuarioValidator(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        message: "Erro ao atualizar usuário, verifique os dados!",
        errors: parsed.error.flatten().fieldErrors,
      });
    }
    const usuario = await atualizarUsuario(id, parsed.data);
    if (!usuario) {
      return res.status(404).json({
        message: "Usuário não encontrado!",
      });
    }
    return res.status(200).json({
      message: "Usuário atualizado com sucesso!",
      usuario,
    });
  } catch (err) {
    next(err);
  }
}
