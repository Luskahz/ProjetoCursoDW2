import { listarUsuarios } from "../../models/usuarioModel.js";
import { parse } from "json2csv";

export default async function exportUsuariosCsvController(req, res, next) {
    try {
        const usuarios = await listarUsuarios();
        const data = usuarios.map(u => ({
            id: u.id,
            nome: u.nome,
            email: u.email
            // Não exporta senha por segurança
        }));
        const csv = parse(data);
        res.header("Content-Type", "text/csv");
        res.attachment("usuarios.csv");
        res.send(csv);
    } catch (err) {
        next(err);
    }
}
