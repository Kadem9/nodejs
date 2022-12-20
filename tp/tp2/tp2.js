// Écrivez un programme Node.js qui lit un fichier, modifie son contenu et réécrit le contenu modifié dans le fichier.

const fs = require("fs");

fs.readFile("tp2/fichier.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    let myNewData = data.replace(data, ["Test"]);

    fs.writeFile("tp2/fichier.txt", myNewData, "utf-8", (err) => {
        if (err) {
            console.log(err);
        }
        console.log(myNewData);
    });
});