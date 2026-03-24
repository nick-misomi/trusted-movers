import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import connectDB from './config/db.js'
import contactRoutes from './routes/contactRoutes.js'
import quoteRoutes from './routes/quoteRoutes.js'

dotenv.config()
connectDB()

const app = express()

app.use(cors({ origin: process.env.CLIENT_URL }))
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Trusted Movers API is running...')
})

app.use('/api/contact', contactRoutes)
app.use('/api/quotes', quoteRoutes)

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

/*const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})*/