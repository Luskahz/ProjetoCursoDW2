import { z } from "zod";

export const livroSchema = z.object({
  titulo: z.string().min(1, "Título obrigatório"),
  autor: z.string().min(1, "Autor obrigatório"),
  ano: z.number().int().min(0, "Ano inválido").optional(),
  usuarioId: z.number().int().optional(),
});
