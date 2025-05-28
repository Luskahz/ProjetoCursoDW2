export default function errorsHandler(err, req, res, next) {
    console.error(err);
    res.status(500).json({ error: err.message || "Erro interno do servidor" });

    }
