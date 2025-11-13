import express from 'express'
import helmet from 'helmet'
import path from 'path'
import 'dotenv/config'
import router from './router'

const port = process.env.PORT

const app = express()
app.use(express.json())
app.use(helmet())
app.use(router)
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public')))

const server = app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`)
})

server.close(() => {
  console.log("Servidor encerrado.");
});

export default server;
