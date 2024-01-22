const express = require('express');
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(__dirname));

app.get('/', (req, res) => {
 res.sendfile(__dirname + '/index.html');
});

io.on('chat message', (msg) => {
 io.emit('chat message', msg); 
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("a user has diconnected");
  });
});

server.listen(3000, () => {
 console.log('server running at http://localhost:3000');
}); 

