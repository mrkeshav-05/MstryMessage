import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectToDatabase from './db/connectToDatabase.js';
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser()); //to access the cookies from the server

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}/api`)
});