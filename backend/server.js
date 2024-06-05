import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectToDatabase from './db/connectToDatabase.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)

app.use("/api/auth", authRoutes);

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}/api/auth`)
});