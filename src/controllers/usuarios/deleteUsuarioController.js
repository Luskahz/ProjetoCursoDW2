import { deletarUsuario } from "../../models/usuarioModel.js";

export default async function deleteUsuarioController(req, res, next) {
    try {
        const id = parseInt(req.params.id, 10);
        await deletarUsuario(id);
        res.sendStatus(204);

        } catch (err) { next(err); }

        }
    