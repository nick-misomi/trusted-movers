import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    }
    
    const conn = await mongoose.connect(process.env.MONGODB_URI, options)
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Database connection error: ${error.message}`)
    // Don't exit process on Vercel - let it retry
    if (process.env.VERCEL_ENV !== 'production') {
      process.exit(1)
    }
  }
}

export default connectDB