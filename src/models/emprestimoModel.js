import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function listarEmprestimos() {// Listar todos os empréstimos com detalhes do usuário e livro
  return prisma.emprestimo.findMany({
    include: { usuario: true, livro: true },
  })
}
export async function criarEmprestimo(data) {// Criar um novo empréstimo
  return prisma.emprestimo.create({ data })
}
export async function atualizarEmprestimo(id, data) {// Atualizar um empréstimo existente
  return prisma.emprestimo.update({ where: { id }, data })
}
export async function deletarEmprestimo(id) {// Deletar um empréstimo pelo ID
  return prisma.emprestimo.delete({ where: { id } })
}
export async function obterEmprestimo(id) {// Obter um empréstimo específico pelo ID, incluindo detalhes do usuário e livro
  return prisma.emprestimo.findUnique({
    where: { id },
    include: { usuario: true, livro: true },
  })
}
