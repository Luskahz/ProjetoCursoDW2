import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function listarUsuarios() {// Listar todos os usuários com seus livros associados
  return prisma.usuario.findMany({ include: { livros: true } })
}
export async function criarUsuario(data) {// Criar um novo usuário
  return prisma.usuario.create({ data })
}
export async function atualizarUsuario(id, data) {// Atualizar um usuário existente
  return prisma.usuario.update({ where: { id }, data })
}
export async function deletarUsuario(id) {// Deletar um usuário pelo ID
  return prisma.usuario.delete({ where: { id } })
}
export async function obterUsuario(id) {// Obter um usuário específico pelo ID, incluindo seus livros associados
  return prisma.usuario.findUnique({
    where: { id },
    include: { livros: true },
  })
}
