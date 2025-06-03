import { criarUsuario } from "../../models/usuarioModel.js"
import { usuarioValidator } from "../../schemas/usuarioSchema.js"
export default async function createUsuarioController(req, res, next) {
    try {
        const dados = req.body
        // Valida o usuário sem exigir o campo id
        const { success, error, data: usuarioValidado } = usuarioValidator(dados, { id: true })
        if (!success) {
            return res.status(400).json({
                message: "Erro ao cadastrar usuário, verifique os dados!",
                errors: error.flatten().fieldErrors,
            })
        }
        const result = await criarUsuario(usuarioValidado)
        return res.status(201).json({
            message: "Usuário cadastrado com sucesso!",
            usuario: result,
        })
    } catch (error) {
        next(error)
    }
}
