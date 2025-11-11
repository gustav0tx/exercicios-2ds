import express from 'express'

const router = express.Router()
const arrProduct = [
    { "id": 1, "nome": "Mouse Gamer", "preco": 120 },
    { "id": 2, "nome": "Teclado Mecânico", "preco": 350 },
    { "id": 3, "nome": "Monitor Full HD", "preco": 900 }
]

router.get('/', (req, res) => {
    res.json({ nome: 'Guga', idade: 16 })
})

router.get('/ping', (req, res) => {
    res.json({ pong: true })
})

router.get('/produtos', (req, res) => {
    res.json(arrProduct)
})

router.get('/produtos/:id', (req, res) => {
    const { id } = req.params
    let index = parseInt(id)
    res.json(arrProduct[index-1])
})

router.post('/produtos', (req,res) => {
    
})

export default router