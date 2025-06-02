import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function listarLivros() {// Listar todos os livros da biblio
  return prisma.livro.findMany()
}
export async function criarLivro(data) {// Criar um novo livro
  return prisma.livro.create({ data })
}
export async function atualizarLivro(id, data) {// Atualizar um livro existente
  return prisma.livro.update({ where: { id }, data })
}
export async function deletarLivro(id) {// Deletar um livro pelo ID
  return prisma.livro.delete({ where: { id } })
}
export async function obterLivro(id) {// Obter um livro específico pelo ID
  return prisma.livro.findUnique({ where: { id } })
}
