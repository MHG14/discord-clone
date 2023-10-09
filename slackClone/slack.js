const express = require("express");
const socketio = require("socket.io");
const namespaces = require("./data/namespaces");

const app = express();
const expressServer = app.listen(8000);

app.use(express.static(__dirname + "/public"));

const io = socketio(expressServer);

io.on("connection", (socket) => {
  socket.emit("welcome", "welcome to the server");
  socket.on("clientConnect", () => {
    console.log(socket.id);
  });

  socket.emit("nsList", namespaces);
});
