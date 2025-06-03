import { deletarUsuario } from "../../models/usuarioModel.js"
import { usuarioValidator } from "../../schemas/usuarioSchema.js"

export default async function deleteUsuarioController(req, res, next) {
    try {
        const { id } = req.params
        const usuario = { id: +id }
        const { success, error, data } = usuarioValidator(
            usuario,
            { nome: true, email: true, senha: true }
        )

        if (!success) {
            return res.status(400).json({
                message: "Erro ao deletar usuário, verifique o id",
                errors: error.flatten().fieldErrors,
            })
        }

        const result = await deletarUsuario(data.id)
        if (!result) {
            return res.status(404).json({
                message: "Usuário não encontrado!",
            })
        }

        return res.json({
            message: `Usuário ID ${id} excluído com sucesso!`,
            usuario: result,
        })
    } catch (err) {
        next(err)
    }
}
