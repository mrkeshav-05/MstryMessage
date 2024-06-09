import { Server } from "socket.io";
import http from "http";
import express from "express";
import { createServer } from "http";
import cors from "cors";
const app = express();

const server = createServer(app);
const io = new Server(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
		credentials: true,
	},
});

const userSocketMap = {}; // {userId: socketId}


io.on("connection", (socket) => {
	console.log("a user connected", socket.id);

	const userId = socket.handshake.query.userId;
	console.log(userId)

	// socket.on() is used to listen to the events. can be used both on client and server side
	socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
		delete userSocketMap[userId];
		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};


export { app, io, server };
