import express from "express"
import createEmprestimoController from "../controllers/emprestimos/createEmprestimoController.js"
import updateEmprestimoController from "../controllers/emprestimos/updateEmprestimoController.js"
import deleteEmprestimoController from "../controllers/emprestimos/deleteEmprestimoController.js"
import getEmprestimoController from "../controllers/emprestimos/getEmprestimoController.js"
import listEmprestimosController from "../controllers/emprestimos/listEmprestimosController.js"
import exportEmprestimosCsvController from "../controllers/emprestimos/exportEmprestimosCsvController.js"

const router = express.Router()

router.get("/", listEmprestimosController)                  // listar os emprestimos existentes no banco
router.post("/", createEmprestimoController)                // criar um emprestimo
router.get("/:id", getEmprestimoController)                 // buscar um emprestimo pelo id
router.put("/:id", updateEmprestimoController)              // atualizar um emprestimo pelo id
router.delete("/:id", deleteEmprestimoController)           // deletar um emprestimo pelo id

router.get("/export/csv", exportEmprestimosCsvController)   // função adicional para exportar empréstimos em csv

export default router
