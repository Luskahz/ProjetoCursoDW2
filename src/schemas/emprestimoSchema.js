import { z } from "zod";

export const emprestimoSchema = z.object({
  id: z.number().int().min(1),
  usuarioId: z.number().int(),
  livroId: z.number().int(),
  dataRetirada: z.string().datetime(),
  dataDevolucao: z.string().datetime().optional(),// olá renan, aqui ficou optional pois na hora de cadastrar um imprestimo não necessariamente eu cadastro a data da devolução, faço um patch depois para devolver o livro
});


export const emprestimoValidator = (emprestimo, partial = null) => {
    if(partial){
        return emprestimoSchema.partial(partial).safeParse(emprestimo)
    }
    return emprestimoSchema.safeParse(emprestimo)
}