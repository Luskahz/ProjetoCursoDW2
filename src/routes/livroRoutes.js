import express from "express"
import createLivroController from "../controllers/livros/createLivroController.js"
import deleteLivroController from "../controllers/livros/deleteLivroController.js"
import exportLivrosCsvController from "../controllers/livros/exportLivrosCsvController.js"
import getLivroController from "../controllers/livros/getLivroController.js"
import listLivrosController from "../controllers/livros/listLivrosController.js"
import updateLivroController from "../controllers/livros/updateLivroController.js"

const router = express.Router()

router.get("/", listLivrosController)                   //listar os livros existentes no banco
router.post("/", createLivroController)                 //adcionar um livro a biblio
router.get("/:id", getLivroController)                  //buscar um livro pelo id
router.put("/:id", updateLivroController)               //atualizar um livro pelo id
router.delete("/:id", deleteLivroController)            //deletar um livro pelo id

router.get("/export/csv", exportLivrosCsvController)    //função adicional para exportar livros em csv

export default router
