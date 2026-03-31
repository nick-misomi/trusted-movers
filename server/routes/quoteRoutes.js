import express from 'express'
import { createQuote } from '../controllers/qouteController.js'

const router = express.Router()

router.post('/', createQuote)

export default router