import http from 'node:http'
import 'dotenv/config'

const nome = 'Jonh'
const idade = 34
const port = process.env.PORT

const server = http.createServer((req, res) => {

    res.statusCode = 200
    res.end(`Servidor rodando para ${nome}, idade ${idade}!`)

})

server.listen(port, () => {
    console.log(`Servidor funcionando em http://localhost:${port}`)
})

server.close(() => {
  console.log("Servidor encerrado.")
})

export default server