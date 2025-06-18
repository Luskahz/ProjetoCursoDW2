import { z } from "zod";

export const usuarioSchema = z.object({
  id: z.number({
    required_error: "O campo 'id' é obrigatório.",
    invalid_type_error: "O campo 'id' deve ser um número inteiro."
  }).int().min(1, { message: "O campo 'id' deve ser maior que zero." }),
  nome: z.string({
    required_error: "O campo 'nome' é obrigatório.",
    invalid_type_error: "O campo 'nome' deve ser uma string."
  }).min(1, { message: "Nome obrigatório." }),
  email: z.string({
    required_error: "O campo 'email' é obrigatório.",
    invalid_type_error: "O campo 'email' deve ser uma string."
  }).email({ message: "E-mail inválido." }),
  senha: z.string({
    required_error: "O campo 'senha' é obrigatório.",
    invalid_type_error: "O campo 'senha' deve ser uma string."
  }).min(4, { message: "Senha deve ter pelo menos 4 caracteres." }),
});

export const usuarioValidator = (usuario, partial = null) => {
    if(partial){
        return usuarioSchema.partial(partial).safeParse(usuario)
    }
    return usuarioSchema.safeParse(usuario)
}
