import { z } from "zod";

export const livroSchema = z.object({
  id: z.number().int().min(1),
  titulo: z.string().min(1, "Título obrigatório"),
  autor: z.string().min(1, "Autor obrigatório"),
  ano: z.number().int().min(0, "Ano inválido").optional(),
  usuarioId: z.number().int().optional(),
});


export const livroValidator = (livro, partial = null) => {
    if(partial){
        return livroSchema.partial(partial).safeParse(livro)
    }
    return livroSchema.safeParse(livro)
  }
  