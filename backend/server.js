import express, { application } from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectToDatabase from './db/connectToDatabase.js';
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js';
import cookieParser from 'cookie-parser';
import { server } from './socket/socket.js';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000 ;


const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true,
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};


app.use(cors());
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser()); //to access the cookies from the server
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.get('/', (req, res) => {
  res.send('Hello ' + res.status);
  console.log(res)
})

// Start the server and connect to the database
app.listen(PORT, async () => {
  try {
    await connectToDatabase(); // Connect to the database
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
  } catch (error) {
    console.error('Failed to connect to the database', error);
    process.exit(1); // Exit process with failure
  }
});