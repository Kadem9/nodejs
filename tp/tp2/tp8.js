// Écrivez un programme Node.js qui utilise le module path pour manipuler les chemins de fichiers.

const path = require("path");

const myPath = "tp2/tp8.js";

console.log(path.basename(myPath)); // base du fichier
console.log(path.dirname(myPath)); // nom du répertoire

// Il y a plusieurs autres methodes que nous pouvons voir grâce à la doc : https://devdocs.io/node/path