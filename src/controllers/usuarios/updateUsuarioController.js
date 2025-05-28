import { atualizarUsuario, validarUsuario } from "../../models/usuarioModel.js";

export default async function updateUsuarioController(req, res, next) {
    try {
        const id = parseInt(req.params.id, 10);
        const parsed = validarUsuario(req.body);
        if (!parsed.success) return res.status(400).json({ error: parsed.error.errors });
        const usuario = await atualizarUsuario(id, parsed.data);
        res.json(usuario);

        } catch (err) { next(err); }

        }
    