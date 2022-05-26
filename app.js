//imports
const express = require("express");
const cors = require("cors");
const http = require('http');
const {Server} = require('socket.io')
const router = require('./routes/douladoRouter');
const chatRouter = require('./routes/chatRouter');

//start up server
const app = express();

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ["GET", "POST"]
  }
});

io.on("connection", socket => {
  socket.on("chat", payload => {
    socket.broadcast.emit("receive_message")
  })
})

//middleware
app.use(express.json());
app.use(cors());
app.use(router);
app.use(chatRouter);


//configure port
const PORT = process.env.PORT || 8000;

//listen to port
server.listen(PORT, () => {
  console.log("listening on port 8000");
});