const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/router");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors);
app.use(router);

const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
