import express from "express"
import cors from "cors"
import livroRoutes from "./routes/livroRoutes.js"
import usuarioRoutes from "./routes/usuarioRoutes.js"
import emprestimoRoutes from "./routes/emprestimoRoutes.js"
import errorsHandler from "./middlewares/errorsHandler.js"

import { notFoundController } from "./controllers/notFoundController.js"
import { welcomeController } from "./controllers/welcomeController.js"


const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get("/", welcomeController)
app.use("/api/livros", livroRoutes)
app.use("/api/usuarios", usuarioRoutes)
app.use("/api/emprestimos", emprestimoRoutes)

app.use("*", notFoundController)
app.use(errorsHandler)

app.listen(port, () => {
    console.log(`\n\nServidor rodando em http://localhost:${port}`)
})
