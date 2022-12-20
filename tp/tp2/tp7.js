// Écrivez un programme Node.js qui utilise le module child_process pour exécuter un programme en ligne de commande.

const childProcess = require("child_process");

childProcess.exec("dir", (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
});