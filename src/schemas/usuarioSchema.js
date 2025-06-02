import { z } from "zod";

export const usuarioSchema = z.object({
  id: z.number().int().min(1),
  nome: z.string().min(1, "Nome obrigatório"),
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(4, "Senha deve ter pelo menos 4 caracteres"),
})

export const usuarioValidator = (usuario, partial = null) => {
    if(partial){
        return usuarioSchema.partial(partial).safeParse(usuario)
    }
    return usuarioSchema.safeParse(usuario)
  }
