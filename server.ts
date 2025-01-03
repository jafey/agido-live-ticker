// @ts-expect-error types for express not present
import express from "express";
import http from "http";
import cors from "cors";
import { Server, Socket } from "socket.io";
import { SportType } from "@/app/model/SportType";
import { MessageType } from "@/app/model/MessageType";

// Dummy DB as local variable
const database = [{
  name: "Borussia Dortmund",
  sport: SportType.SOCCER,
  type: MessageType.GOAL,
  playTime: "13'",
  score: "1:0"
}, {
  name: "Alexander Zverev",
  sport: SportType.TENNIS,
  type: MessageType.GAME,
  playTime: "2. Satz",
  score: "6:4"
}, {
  name: "Bayern München",
  sport: SportType.SOCCER,
  type: MessageType.PENALTY,
  playTime: "90' +3",
  score: "1:1"
}, {
  name: "Schalke 04",
  sport: SportType.SOCCER,
  type: MessageType.RED_CARD,
  playTime: "70'",
  score: "1:2"
},
  {
    name: "Novak Djokovic",
    sport: SportType.TENNIS,
    type: MessageType.MATCH,
    playTime: "3. Satz",
    score: "15-40"
  }]

// Create an Express application
const app = express();

// Enable CORS for requests from localhost:3000
app.use(cors({ origin: "http://localhost:3000" }));

// Create an HTTP server to work with Socket.IO
const server = http.createServer(app);

// Initialize a Socket.IO server
const io = new Server(server,
  {
    cors: {
      origin: "http://localhost:3000",
    }
  });

// HTTP GET endpoint to return a list of strings
// @ts-expect-error types for express not present
app.get("/messages", (req, res) => {
  res.json(database); // Respond with JSON
});

// Handle client connections
io.on("connection", (socket: Socket) => {
  console.log("A client connected");

  // Handle incoming messages from clients
  socket.on("message", (data: string) => {
    console.log("Message from client:", data);

    // Send the message back to the client (echo)
    socket.send(data);
  });

  // Handle client disconnections
  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});


// Start the server on a specified port
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`WebSocket server is running at http://localhost:${PORT}`);
});