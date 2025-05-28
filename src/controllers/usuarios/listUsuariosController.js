import { listarUsuarios } from "../../models/usuarioModel.js";

export default async function listUsuariosController(req, res, next) {
    try {
        const usuarios = await listarUsuarios();
        res.json(usuarios);

        } catch (err) { next(err); }

        }
    