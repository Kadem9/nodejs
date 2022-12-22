const express = require("express");
const app = express();
const path = require("path");

// Je défini mes routes
// Celle-ci sera la route principale, la home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "launcher.html"));
});

// Celle-ci sera la route pour le jeu du pierre feuille ciseaux (home page du jeu)
app.get("/pfc", (req, res) => {
    res.sendFile(path.join(__dirname, "pfc.html"));
});

// Celle-ci sera la route pour le jeu du pierre feuille ciseaux (jeu)
app.get("/pfcplay", (req, res) => {
    res.sendFile(path.join(__dirname, "pfcplay.html"));
});

// je demarre mon serveur sur le port 8000 dispo à l'adresse localhost:8000
app.listen(8000, () => {
    console.log("Le serveur écoute sur le port 8000");
});