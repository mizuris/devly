require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const socketio = require("socket.io");
const router = require("./routes/router");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors);
app.use(router);

app.get("/", (_, res) => {
  res.send("<h1>Hello from the back!</h1>");
});

app.use((error, _, res, __) => {
  console.log("An error occured:", error);
  res.json({ message: error.message || "Unknown error occured.", error: true });
});

// Socket
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("socket connected");
});

// Connect to DB, on connection start the SERVER
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`connected to port ${PORT}`));
  })
  .catch((err) => console.log(`Error occured on starting server: ${err}`));
