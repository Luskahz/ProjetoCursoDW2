import { PrismaClient } from "@prisma/client";

import { z } from "zod";
const prisma = new PrismaClient();

const livroSchema = z.object({
    titulo: z.string().min(1, "Título obrigatório"),
    autor: z.string().min(1, "Autor obrigatório"),
    ano: z.number().int().min(0, "Ano inválido").optional(),
    usuarioId: z.number().int().optional(),

    });
    

    export function validarLivro(data) {
        return livroSchema.safeParse(data);

        }

    export async function listarLivros() {
        return prisma.livro.findMany();

        }

    export async function criarLivro(data) {
        return prisma.livro.create({ data });

        }

    export async function atualizarLivro(id, data) {
        return prisma.livro.update({ where: { id }, data });

        }

    export async function deletarLivro(id) {
        return prisma.livro.delete({ where: { id } });

        }

    export async function obterLivro(id) {
        return prisma.livro.findUnique({ where: { id } });

        }
    