import { listarUsuarios } from "../../models/usuarioModel.js";

import { parse } from "json2csv";

export default async function exportUsuariosCsvController(req, res, next) {
    try {
        const usuarios = await listarUsuarios();
        const csv = parse(usuarios);
        res.header("Content-Type", "text/csv");
        res.attachment("usuarios.csv");
        res.send(csv);

        } catch (err) { next(err); }

        }
    