import express from 'express'
import produtos from './produtos'

const router = express.Router()
router.use('/', produtos)

export default router