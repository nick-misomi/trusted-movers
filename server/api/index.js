import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import serverless from 'serverless-http'

import connectDB from '../config/db.js'
import contactRoutes from '../routes/contactRoutes.js'
import quoteRoutes from '../routes/quoteRoutes.js'

dotenv.config()

const app = express()

// Connect to MongoDB (safe for serverless)
await connectDB()

// Middleware
app.use(cors({
  origin: true,
  credentials: true
}))
app.use(express.json())

// Health check
app.get('/', (req, res) => {
  res.json({
    message: 'Trusted Movers API Running',
    dbStatus: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  })
})

// Routes
app.use('/api/contact', contactRoutes)
app.use('/api/quotes', quoteRoutes)

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl
  })
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err)

  res.status(err.statusCode || 500).json({
    error: err.message || 'Server Error'
  })
})

// THIS IS THE KEY LINE
export default serverless(app)