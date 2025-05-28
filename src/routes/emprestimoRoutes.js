import express from "express";

import createEmprestimoController from "../controllers/emprestimos/createEmprestimoController.js";

import updateEmprestimoController from "../controllers/emprestimos/updateEmprestimoController.js";

import deleteEmprestimoController from "../controllers/emprestimos/deleteEmprestimoController.js";

import getEmprestimoController from "../controllers/emprestimos/getEmprestimoController.js";

import listEmprestimosController from "../controllers/emprestimos/listEmprestimosController.js";

import exportEmprestimosCsvController from "../controllers/emprestimos/exportEmprestimosCsvController.js";

const router = express.Router();

router.get("/", listEmprestimosController);
router.post("/", createEmprestimoController);
router.get("/:id", getEmprestimoController);
router.put("/:id", updateEmprestimoController);
router.delete("/:id", deleteEmprestimoController);
router.get("/export/csv", exportEmprestimosCsvController);

export default router;
