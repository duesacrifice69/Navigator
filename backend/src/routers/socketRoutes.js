// socketRoutes.js
const socketio = require("socket.io");

function initializeSocket(server) {
  const io = socketio(server);

  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
      
    });
  });

  return io;
}

module.exports = initializeSocket;
