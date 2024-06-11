import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";
import connectToDatabase from "./db/connectToDatabase.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const __dirname = path.resolve();
// PORT should be assigned after calling dotenv.config() because we need to access the env variables. Didn't realize while recording the video. Sorry for the confusion.
// const app = express();
const PORT = process.env.PORT || 2000;

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());
// app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/chat_app_frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../chat_app_frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
	connectToDatabase();
	console.log(`Server Running on port ${PORT}`);
});
