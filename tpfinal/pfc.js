// Nous allons créer le jeu pierre feuille ciseau encore une fois en utilisant la fonction readline comme sur notre launcher

// Je stock donc la fonction readline.question dans une variable
const readline = require("readline");

// En suivant les étapes de la doc, il nous indique de créer une interface de lecture de ligne
// Je crée donc une variable qui contient cette interface
const rl = readline.createInterface({
    input: process.stdin, // stdin sert à lire les entrées de l'utilisateur
    output: process.stdout, // stdout sert à afficher les réponses de l'utilisateur
});

// Nous allons désormais définir nos types, biensur nous n'allons pas mettre le puit..
// Notre tableau nous servira ensuite à générer un nombre aléatoire qui correspondra à un type pour l'ordinateur grâce au index de notre tableau
const types = ["pierre", "feuille", "ciseaux"];

// Comme pour le launcher, nous allons utiliser la méthode question de readline
rl.question("Choisissez pierre, feuille ou ciseaux : ", (reponse) => {
    const userReponse = reponse;
    console.log("Vous avez choisi " + userReponse);
    rl.close();
});