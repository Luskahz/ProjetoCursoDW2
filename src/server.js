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

app.get("/api/", welcomeController) //controller que é chamado quando o usuario da api entra na raiz dos endpoitns
app.use("/api/livros", livroRoutes)// crud dos livros
app.use("/api/usuarios", usuarioRoutes)//crid dos usuarios da biblioteca
app.use("/api/emprestimos", emprestimoRoutes)//crud do relacionamento

app.use("*", notFoundController)
app.use(errorsHandler)

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend.html"));
});

app.listen(port, () => {
    console.log(`\n\nServidor rodando em http://localhost:${port}`)
})
