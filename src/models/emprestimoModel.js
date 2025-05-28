import { PrismaClient } from "@prisma/client";

import { z } from "zod";
const prisma = new PrismaClient();

const emprestimoSchema = z.object({
    usuarioId: z.number().int(),
    livroId: z.number().int(),
    dataRetirada: z.string().datetime(),
    dataDevolucao: z.string().datetime().optional(),

    });
    

    export function validarEmprestimo(data) {
        return emprestimoSchema.safeParse(data);

        }

    export async function listarEmprestimos() {
        return prisma.emprestimo.findMany({ include: { usuario: true, livro: true } });

        }

    export async function criarEmprestimo(data) {
        return prisma.emprestimo.create({ data });

        }

    export async function atualizarEmprestimo(id, data) {
        return prisma.emprestimo.update({ where: { id }, data });

        }

    export async function deletarEmprestimo(id) {
        return prisma.emprestimo.delete({ where: { id } });

        }

    export async function obterEmprestimo(id) {
        return prisma.emprestimo.findUnique({ where: { id }, include: { usuario: true, livro: true } });

        }
    