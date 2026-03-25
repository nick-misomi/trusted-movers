import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from '../config/db.js'
import contactRoutes from '../routes/contactRoutes.js'
import quoteRoutes from '../routes/quoteRoutes.js'

dotenv.config()

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Trusted Movers API Running')
})

app.use('/api/contact', contactRoutes)
app.use('/api/quotes', quoteRoutes)

export default app