import express from "express";

import createUsuarioController from "../controllers/usuarios/createUsuarioController.js";

import updateUsuarioController from "../controllers/usuarios/updateUsuarioController.js";

import deleteUsuarioController from "../controllers/usuarios/deleteUsuarioController.js";

import getUsuarioController from "../controllers/usuarios/getUsuarioController.js";

import listUsuariosController from "../controllers/usuarios/listUsuariosController.js";

import exportUsuariosCsvController from "../controllers/usuarios/exportUsuariosCsvController.js";

const router = express.Router();

router.get("/", listUsuariosController);
router.post("/", createUsuarioController);
router.get("/:id", getUsuarioController);
router.put("/:id", updateUsuarioController);
router.delete("/:id", deleteUsuarioController);
router.get("/export/csv", exportUsuariosCsvController);

export default router;
