const app = require("express")();
const server = require("http").createServer(app);
const socketIo = require("socket.io")(server);
// J'importe mon socket.io