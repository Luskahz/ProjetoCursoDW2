import { obterUsuario } from "../../models/usuarioModel.js";

export default async function getUsuarioController(req, res, next) {
    try {
        const id = parseInt(req.params.id, 10);
        const usuario = await obterUsuario(id);
        if (!usuario) return res.sendStatus(404);
        res.json(usuario);

        } catch (err) { next(err); }

        }
    