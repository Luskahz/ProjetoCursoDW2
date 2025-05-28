import { criarLivro, validarLivro } from "../../models/livroModel.js"

export default async function createLivroController(req, res, next) {
    try{
        const dados = req.body
        const {success, error, data: livroValidado} = validarLivro(dados)
        if(!success){
            return res.status(400).json({
                message: "Erro ao cadastrar livro, verifique os dados!",
                errors: error.flatten().fieldErrors
            })
        }
        const result = await criarLivro(livroValidado)
        return res.status(201).json({
            message: "Livro cadastrado com sucesso!",
            livro: result
        })
    }catch(error){
        next(error)
    }
}
