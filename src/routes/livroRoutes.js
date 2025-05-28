import express from "express";

import createLivroController from "../controllers/livros/createLivroController.js";

import updateLivroController from "../controllers/livros/updateLivroController.js";

import deleteLivroController from "../controllers/livros/deleteLivroController.js";

import getLivroController from "../controllers/livros/getLivroController.js";

import listLivrosController from "../controllers/livros/listLivrosController.js";

import exportLivrosCsvController from "../controllers/livros/exportLivrosCsvController.js";

const router = express.Router();

router.get("/", listLivrosController);
router.post("/", createLivroController);
router.get("/:id", getLivroController);
router.put("/:id", updateLivroController);
router.delete("/:id", deleteLivroController);
router.get("/export/csv", exportLivrosCsvController);

export default router;
