import express from 'express'
import helmet from 'helmet'
import path from 'path'
import 'dotenv/config'
import router from './router'

const port = process.env.PORT

const server = express()
server.use(express.json())
server.use(helmet())
server.use(router)
server.use(express.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, '../public')))

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/
`)
}).close(() => {
  console.log("Servidor encerrado.");
})


export default server;
