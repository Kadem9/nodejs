// Écrivez un programme Node.js qui utilise le module fs pour créer un nouveau fichier et y écrire des données.

const fs = require("fs");
const baseline = "tp2/";
const myNewFile = baseline + "lenouveaunom.txt";

fs.writeFile(myNewFile, "Hello World", "utf8", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Le fichier vient d'être créé.");
});