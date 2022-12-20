// Écrivez un programme Node.js qui utilise le module os pour obtenir le répertoire personnel de l'utilisateur actuel.

const os = require("os");

console.log("Le répertoire personnel de l'utilisateur actuel est " + os.homedir());