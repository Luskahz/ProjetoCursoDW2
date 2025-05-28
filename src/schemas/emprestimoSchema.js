import { z } from "zod";

export const emprestimoSchema = z.object({
  usuarioId: z.number().int(),
  livroId: z.number().int(),
  dataRetirada: z.string().datetime(),
  dataDevolucao: z.string().datetime().optional(),
});
