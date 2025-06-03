import { obterUsuario } from "../../models/usuarioModel.js";
import { usuarioValidator } from "../../schemas/usuarioSchema.js";

export default async function getUsuarioController(req, res, next) {
    try {
        const id = parseInt(req.params.id, 10);
        const { success, error } = usuarioValidator({ id }, { nome: true, email: true, senha: true });
        if (!success) {
            return res.status(400).json({
                message: "Erro ao obter usuário, id inválido!",
                errors: error.flatten().fieldErrors,
            });
        }
        const usuario = await obterUsuario(id);
        if (!usuario) {
            return res.status(404).json({
                message: "Usuário não encontrado!",
            });
        }
        return res.status(200).json({
            message: "Usuário encontrado com sucesso!",
            usuario,
        });
    } catch (err) {
        next(err);
    }
}
