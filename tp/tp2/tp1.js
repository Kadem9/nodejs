// Écrivez un programme Node.js qui lit un fichier et imprime son contenu dans la console.

const fs = require("fs");

fs.readFile("tp2/fichier.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});