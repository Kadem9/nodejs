// Nous allons stocker dans une variable le mot à trouver
// Nous mettons également la variable readLine pour pouvoir utiliser la méthode question
const mot = "Developpement";
const readLine = require("readline");

// En suivant les étapes de la doc, il nous indique de créer une interface de lecture de ligne
// Je crée donc une variable qui contient cette interface
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Nous allons stocker dans une variable le nombre de tentatives
const nbTentatives = 10;
// Nous allons stocker dans une variable le nombre de lettres trouvées
let nbLettresTrouvees = 0;
// Nous allons stocker dans une variable le nombre de tentatives restantes
let nbTentativesRestantes = nbTentatives;
// Nous allons stocker dans une variable le mot à trouver avec des tirets
let motCache = "";
// Nous allons stocker dans une variable les lettres déjà proposées
let lettresProposees = "";
// Nous allons stocker dans une variable le mot à trouver avec des tirets

// Nous allons faire une boucle pour dire tant que le nombre de tentatives restantes est supérieur à 0 et que le nombre de lettres trouvées est inférieur au nombre de lettres du mot
// L'utilisateur peut encore jouer
while (nbTentativesRestantes > 0 && nbLettresTrouvees < mot.length) {
    console.log("Il vous reste " + nbTentativesRestantes + " tentatives");
}