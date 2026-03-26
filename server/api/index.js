import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import connectDB from '../config/db.js'
import contactRoutes from '../routes/contactRoutes.js'
import quoteRoutes from '../routes/quoteRoutes.js'

dotenv.config()

const app = express()

// Connect to MongoDB (with caching for serverless)
let isConnected = false
if (!isConnected) {
  connectDB()
  isConnected = true
}

// CORS - restrict to same origin in production, allow all in dev
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? true // Same origin in production (Vercel)
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}
app.use(cors(corsOptions))
app.use(express.json())

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Trusted Movers API Running',
    dbStatus: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  })
})

// Check DB connection before handling requests
app.use((req, res, next) => {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({ error: 'Database not connected' })
  }
  next()
})

app.use('/api/contact', contactRoutes)
app.use('/api/quotes', quoteRoutes)

export default app
// 404 handler - must be after all routes
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.originalUrl 
  })
})

// Global error handler - must be last
app.use((err, req, res, next) => {
  console.error('Error:', err)

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(val => val.message)
    return res.status(400).json({ 
      error: 'Validation Error', 
      messages 
    })
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    return res.status(400).json({ 
      error: 'Duplicate field value entered' 
    })
  }

  // Mongoose cast error (invalid ObjectId)
  if (err.name === 'CastError') {
    return res.status(400).json({ 
      error: `Resource not found with id: ${err.value}` 
    })
  }

  // Default error
  res.status(err.statusCode || 500).json({
    error: err.message || 'Server Error'
  })
})
