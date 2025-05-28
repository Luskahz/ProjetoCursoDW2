import { criarUsuario, validarUsuario } from "../../models/usuarioModel.js"

export default async function createUsuarioController(req, res, next) {
    try{
        const dados = req.body
        const {success, error, data: usuarioValidado} = validarUsuario(dados)
        if(!success){
            return res.status(400).json({
                message: "Erro ao cadastrar usuário, verifique os dados!",
                errors: error.flatten().fieldErrors
            })
        }
        const result = await criarUsuario(usuarioValidado)
        return res.status(201).json({
            message: "Usuário cadastrado com sucesso!",
            usuario: result
        })
    }catch(error){
        next(error)
    }
}
