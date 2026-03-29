import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import quoteRoutes from "./routes/quoteRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/quotes", quoteRoutes);
app.use("/api/contact", contactRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

export default app;