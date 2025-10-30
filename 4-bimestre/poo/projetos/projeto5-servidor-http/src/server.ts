import http from 'node:http';
const nome = 'Jonh'
const idade = 34
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {

    res.statusCode = 200
    res.end(`Servidor rodando para ${nome}, idade ${idade}!`)

})

server.listen(port)

server.close(() => {
    console.log("Servidor encerrado.")
})


export default server

