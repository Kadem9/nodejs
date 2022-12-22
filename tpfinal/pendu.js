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
const nbTentatives = 6;
// Nous allons stocker dans une variable le nombre de lettres trouvées
let nbLettresTrouvees = 0;
// Nous allons stocker dans une variable le nombre de tentatives restantes
let nbTentativesRestantes = nbTentatives;
// Nous allons faire un regex pour verifier si la lettre est bien dans le mot
const lettreTrouvee = [];

// Nous allons faire une boucle pour dire tant que le nombre de tentatives restantes est supérieur à 0 et que le nombre de lettres trouvées est inférieur au nombre de lettres du mot
// L'utilisateur peut encore jouer

// Nous allons faire une boucle pour dire tant que le nombre de tentatives restantes est supérieur à 0 et que le nombre de lettres trouvées est inférieur au nombre de lettres du mot
// L'utilisateur peut encore jouer
while (nbTentativesRestantes > 0 && nbLettresTrouvees < mot.length) {
    if (lettreTrouvee.join("") === mot || nbTentativesRestantes === 0) {
        break;
    }
    // Nous allons afficher le mot avec les lettres trouvées
    console.log(lettreTrouvee.join(" "));
    // Nous allons afficher le nombre de tentatives restantes
    console.log("Il vous reste " + nbTentativesRestantes + " tentatives");
    // Nous allons demander à l'utilisateur de saisir une lettre
    rl.question("Saisissez une lettre: ", (lettre) => {
        // Nous allons vérifier si la lettre est dans le mot
        if (mot.includes(lettre)) {
            // Nous allons vérifier si la lettre est déjà dans le mot
            if (lettreTrouvee.includes(lettre)) {
                // Nous allons afficher que la lettre est déjà dans le mot
                console.log("La lettre est déjà dans le mot");
            } else {
                // Nous allons afficher que la lettre est dans le mot
                console.log("La lettre est dans le mot");
                // Nous allons parcourir le mot
                for (let i = 0; i < mot.length; i++) {
                    // Nous allons vérifier si la lettre est dans le mot
                    if (mot[i] === lettre) {
                        // Nous allons remplacer la lettre dans le mot
                        lettreTrouvee[i] = lettre;
                        // Nous allons incrémenter le nombre de lettres trouvées
                        nbLettresTrouvees++;
                    }
                }
            }
        } else {
            // Nous allons afficher que la lettre n'est pas dans le mot
            console.log("La lettre n'est pas dans le mot");
            // Nous allons décrémenter le nombre de tentatives restantes
            nbTentativesRestantes--;
        }

        // Pris sur le github de Bigaston (lien en bas du code)
        if (nbTentatives === 0) {
            let chaineSortie = "``` ┏━━━━━┯\n ┃     │\n ┃\n ┃\n ┃\n━┻━```";
        } else if (nbTentatives === 1) {
            let chaineSortie = "``` ┏━━━━━┯\n ┃     │\n ┃     O\n ┃\n ┃\n━┻━```";
        } else if (nbTentatives === 2) {
            let chaineSortie = "``` ┏━━━━━┯\n ┃     │\n ┃     O\n ┃     X\n ┃\n━┻━```";
        } else if (nbTentatives === 3) {
            let chaineSortie = "``` ┏━━━━━┯\n ┃     │\n ┃    \\O\n ┃     X\n ┃\n━┻━```";
        } else if (nbTentatives === 4) {
            let chaineSortie = "``` ┏━━━━━┯\n ┃     │\n ┃    \\O/\n ┃     X\n ┃\n━┻━```";
        } else if (nbTentatives === 5) {
            let chaineSortie =
                "``` ┏━━━━━┯\n ┃     │\n ┃    \\O/\n ┃     X\n ┃    /\n━┻━```";
        } else if (nbTentatives === 6) {
            let chaineSortie =
                "``` ┏━━━━━┯\n ┃     │\n ┃    \\O/\n ┃     X\n ┃    / \\\n━┻━```";
        }
    });
    break;
}

// Je me suis aidé de ce github pour faire mon jeu
// https://github.com/Bigaston/pendu-bot/blob/master/pendu.js