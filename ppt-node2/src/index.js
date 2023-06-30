import express from 'express';
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRaoutes from "./routes/index.js";
console.log("Cargando . . .");

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, "views"))

app.set('view engine', 'ejs')

app.use(indexRaoutes)
app.use(express.static(join(__dirname,'public')))

app.listen(3000)
console.log("Server is On port", 3000)