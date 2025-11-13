import express from 'express'
import produtos from './produtos'

const router = express.Router()
router.use('/', produtos)

router.get('/', (req, res) => {
    res.json({ nome: 'Guga', idade: 16 })
})

router.get('/ping', (req, res) => {
    res.json({ pong: true })
})

export default router