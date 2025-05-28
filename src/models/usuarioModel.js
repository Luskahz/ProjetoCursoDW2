import { PrismaClient } from "@prisma/client";

import { z } from "zod";
const prisma = new PrismaClient();

const usuarioSchema = z.object({
    nome: z.string().min(1, "Nome obrigatório"),
    email: z.string().email("E-mail inválido"),
    senha: z.string().min(4, "Senha deve ter pelo menos 4 caracteres"),

    });
    

    export function validarUsuario(data) {
        return usuarioSchema.safeParse(data);

        }

    export async function listarUsuarios() {
        return prisma.usuario.findMany({ include: { livros: true } });

        }

    export async function criarUsuario(data) {
        return prisma.usuario.create({ data });

        }

    export async function atualizarUsuario(id, data) {
        return prisma.usuario.update({ where: { id }, data });

        }

    export async function deletarUsuario(id) {
        return prisma.usuario.delete({ where: { id } });

        }

    export async function obterUsuario(id) {
        return prisma.usuario.findUnique({ where: { id }, include: { livros: true } });

        }
    