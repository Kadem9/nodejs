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

// Il va falloir attribuer un type à l'ordinateur, pour cela nous allons utiliser la fonction Math.random()
// Doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
const iaType = types[Math.floor(Math.random() * types.length)];

//console.log(iaType);

// Comme pour le launcher, nous allons utiliser la méthode question de readline
function game() {
    rl.question("Choisissez pierre, feuille ou ciseaux : ", (reponse) => {
        // Je stock la réponse de l'utilisateur dans une variable
        // Nous allons utiliser un switch, qui nous permettra de traiter les cas de manière plus propre
        // Dans chaque cas, nous devons également vérifier ce que l'ordinateur à choisi (iaType)
        switch (reponse) {
            case "pierre":
                if (iaType === "ciseaux") {
                    console.log("Vous avez gagné ! L'ordinateur a choisi ciseaux");
                    replay();
                } else if (iaType === "feuille") {
                    console.log("Vous avez perdu ! L'ordinateur a choisi feuille");
                    replay();
                } else {
                    console.log("Egalité ! L'ordinateur a choisi pierre");
                    replay();
                }
                break;
            case "feuille":
                if (iaType === "pierre") {
                    console.log("Vous avez gagné ! L'ordinateur a choisi pierre");
                    replay();
                } else if (iaType === "ciseaux") {
                    console.log("Vous avez perdu ! L'ordinateur a choisi ciseaux");
                    replay();
                } else {
                    console.log("Egalité ! L'ordinateur a choisi feuille");
                    replay();
                }
                break;
            case "ciseaux":
                if (iaType === "feuille") {
                    console.log("Vous avez gagné ! L'ordinateur a choisi feuille");
                } else if (iaType === "pierre") {
                    console.log("Vous avez perdu ! L'ordinateur a choisi pierre");
                } else {
                    console.log("Egalité ! L'ordinateur a choisi ciseaux");
                }
                break;
            default:
                console.log("Vous n'avez pas choisi pierre, feuille ou ciseaux");
        }
    });
}

game();

// Faire une fonction qui demande à l'utilisateur s'il veut rejouer
// Si oui, relancer le jeu
// Si non, fermer le jeu
function replay() {
    rl.question("Voulez-vous rejouer ? (oui/non) ", (reponse) => {
        if (reponse === "oui") {
            game();
        } else if (reponse === "non") {
            rl.close();
        } else {
            console.log("Vous n'avez pas répondu oui ou non");
            game();
        }
    });
}

// Premiers tests que j'ai fait, je me suis dis que je pouvais utiliser un switch qui rendrait mon code plus propre
//const userReponse = reponse;
// Je vérifie que la réponse de l'utilisateur correspond bien à un type de notre tableau
//if (types.includes(userReponse)) {
//    console.log("Vous avez choisi " + userReponse);
// Si c'est le cas, je génère un nombre aléatoire entre 0 et 2
//    const random = Math.floor(Math.random() * 3);
// Je stock le type de l'ordinateur dans une variable
//   const computerReponse = types[random];
// Je vérifie si l'utilisateur a gagné
//   if (
//       (userReponse === "pierre" && computerReponse === "ciseaux") ||
//      (userReponse === "feuille" && computerReponse === "pierre") ||
//      (userReponse === "ciseaux" && computerReponse === "feuille")
//  ) {
//       console.log("Vous avez gagné !");
//   } else if (userReponse === computerReponse) {
//       console.log("Egalité !");
//   } else {
//      console.log("Vous avez perdu !");
//  }
//  console.log("Vous avez choisi " + userReponse);
//  rl.close();
//  }