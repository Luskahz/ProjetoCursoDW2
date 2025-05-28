import { z } from "zod";

export const usuarioSchema = z.object({
  nome: z.string().min(1, "Nome obrigatório"),
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(4, "Senha deve ter pelo menos 4 caracteres"),
});
