import express from "express"
import createUsuarioController from "../controllers/usuarios/createUsuarioController.js"
import deleteUsuarioController from "../controllers/usuarios/deleteUsuarioController.js"
import exportUsuariosCsvController from "../controllers/usuarios/exportUsuariosCsvController.js"
import getUsuarioController from "../controllers/usuarios/getUsuarioController.js"
import listUsuariosController from "../controllers/usuarios/listUsuariosController.js"
import updateUsuarioController from "../controllers/usuarios/updateUsuarioController.js"


const router = express.Router()

router.get("/", listUsuariosController)                 //listar usuarios
router.post("/", createUsuarioController)               //criar um usuario
router.get("/:id", getUsuarioController)                // puxar um usuario pelo id
router.put("/:id", updateUsuarioController)             // atualizar um usuario pelo id
router.delete("/:id", deleteUsuarioController)          //deletar um usuario pelo id

router.get("/export/csv", exportUsuariosCsvController)  //função adcional exportar usuarios em csv

export default router
