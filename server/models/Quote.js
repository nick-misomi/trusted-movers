import mongoose from 'mongoose'

const quoteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    moveType: { type: String, required: true },
    fromLocation: { type: String, required: true },
    toLocation: { type: String, required: true },
    moveDate: { type: String, required: true },
    details: { type: String }
  },
  { timestamps: true }
)

export default mongoose.model('Quote', quoteSchema)
