// Global error handler middleware
export const errorHandler = (err, req, res, next) => {
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
}

// 404 handler
export const notFound = (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl
  })
}
