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

// CORS configuration
const corsOptions = {
	origin: process.env.NODE_ENV === "production"
		? process.env.FRONTEND_URL || "*"
		: "http://localhost:3000",
	credentials: true,
};
app.use(cors(corsOptions));

// API Routes - these should be defined before static file serving
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Health check endpoint for monitoring
app.get("/health", (req, res) => {
	res.status(200).json({ status: "OK", message: "Server is running" });
});

// Serve static files and handle client-side routing (only in production with built frontend)
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../chat_app_frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "../chat_app_frontend", "dist", "index.html"));
	});
} else {
	app.get("/", (req, res) => {
		res.json({ message: "API is running..." });
	});
}

server.listen(PORT, () => {
	console.log(__dirname)
	connectToDatabase();
	console.log(`Server Running on port ${PORT}`);
});
