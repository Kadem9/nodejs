// Initiation au serveur web avec Node.js
// Lorsque je vais essayer de mettre en ligne mes jeux
// TODO : mettre en ligne les jeux sur un serveur web

const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("Le serveur écoute sur le port" + port);
});