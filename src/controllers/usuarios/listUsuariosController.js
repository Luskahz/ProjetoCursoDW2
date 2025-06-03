import { listarUsuarios } from "../../models/usuarioModel.js";

export default async function listUsuariosController(req, res, next) {
    try {
        const usuarios = await listarUsuarios();
        if (!usuarios || usuarios.length === 0) {
            return res.status(404).json({
                message: "Nenhum usuário encontrado!",
            });
        }
        return res.status(200).json({
            message: "Usuários encontrados com sucesso!",
            usuarios,
        });
    } catch (err) {
        next(err);
    }
}
