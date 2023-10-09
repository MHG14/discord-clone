const express = require("express");
const socketio = require("socket.io");

const app = express();
const expressServer = app.listen(8000);

app.use(express.static(__dirname + "/public"));

const io = socketio(expressServer);

io.on("connection", (socket) => {
  console.log(`socket with id ${socket.id} has connected`);

  socket.on("newMessageToServer", (data) => {
    console.log(data.text);
  });
});
