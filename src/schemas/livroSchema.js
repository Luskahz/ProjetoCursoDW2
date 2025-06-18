import { z } from "zod";

export const livroSchema = z.object({
  id: z.number({
    required_error: "O campo 'id' é obrigatório.",
    invalid_type_error: "O campo 'id' deve ser um número inteiro."
  }).int().min(1, { message: "O campo 'id' deve ser maior que zero." }),
  titulo: z.string({
    required_error: "O campo 'titulo' é obrigatório.",
    invalid_type_error: "O campo 'titulo' deve ser uma string."
  }).min(1, { message: "Título obrigatório." }),
  autor: z.string({
    required_error: "O campo 'autor' é obrigatório.",
    invalid_type_error: "O campo 'autor' deve ser uma string."
  }).min(1, { message: "Autor obrigatório." }),
  ano: z.number({
    invalid_type_error: "O campo 'ano' deve ser um número inteiro."
  }).int().min(0, { message: "Ano inválido." }).optional(),
  usuarioId: z.number({
    invalid_type_error: "O campo 'usuarioId' deve ser um número inteiro."
  }).int().optional(),
});

export const livroValidator = (livro, partial = null) => {
    if(partial){
        return livroSchema.partial(partial).safeParse(livro)
    }
    return livroSchema.safeParse(livro)
}
