import { z } from "zod";

export const emprestimoSchema = z.object({
  id: z.number({
    required_error: "O campo 'id' é obrigatório.",
    invalid_type_error: "O campo 'id' deve ser um número inteiro."
  }).int().min(1, { message: "O campo 'id' deve ser maior que zero." }),
  usuarioId: z.number({
    required_error: "O campo 'usuarioId' é obrigatório.",
    invalid_type_error: "O campo 'usuarioId' deve ser um número inteiro."
  }).int(),
  livroId: z.number({
    required_error: "O campo 'livroId' é obrigatório.",
    invalid_type_error: "O campo 'livroId' deve ser um número inteiro."
  }).int(),
  dataRetirada: z.string({
    required_error: "O campo 'dataRetirada' é obrigatório.",
    invalid_type_error: "O campo 'dataRetirada' deve ser uma string no formato datetime."
  }).datetime({ message: "O campo 'dataRetirada' deve estar em formato datetime ISO válido." }),
  dataDevolucao: z.string({
    invalid_type_error: "O campo 'dataDevolucao' deve ser uma string no formato datetime."
  }).datetime({ message: "O campo 'dataDevolucao' deve estar em formato datetime ISO válido." }).optional(),
});

export const emprestimoValidator = (emprestimo, partial = null) => {
    if(partial){
        return emprestimoSchema.partial(partial).safeParse(emprestimo)
    }
    return emprestimoSchema.safeParse(emprestimo)
}