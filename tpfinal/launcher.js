// Série de console.log pour afficher le menu du jeu
console.log("Bienvenue dans le nouveau jeux.fr !");
console.log(
    "Ceci est une première version BETA, merci de nous faire part de vos retours sur le forum : https://isitech.fr/jeux/",
);
console.log("Choisissez un jeu à lancer :");
console.log("1. Jeu 1 : Pierre, Feuille, Ciseaux");
console.log("2. Jeu 2 : Pendu");
console.log("3. Jeu 3 : Morpion");
console.log("4. Jeu 4 : Puissance 4");

// On stock les path des jeux dans un tableau
const games = ["./pfc.js", "./pendu.js", "./morpion.js", "./puissance4.js"];

// Nous allons maintenant demander à l'utilisateur de choisir un jeu
// Pour cela, nous allons utiliser la fonction readline.question
// Cette fonction prend en paramètre une question à poser à l'utilisateur et une fonction de callback
// Voici le lien de la doc qui m'a aidé à utiliser cette fonction
// https://devdocs.io/node/readline

// Je stock donc la fonction readline.question dans une variable
const readline = require("readline");

// En suivant les étapes de la doc, il nous indique de créer une interface de lecture de ligne
// Je crée donc une variable qui contient cette interface
const rl = readline.createInterface({
    input: process.stdin, // stdin sert à lire les entrées de l'utilisateur
    output: process.stdout, // stdout sert à afficher les réponses de l'utilisateur
});

// Nous allons utiliser la méthode question de readline
// Cette méthode prend en paramètre une question à poser à l'utilisateur et une fonction de callback qui retournera la réponse de l'utilisateur
// TODO : Faire une boucle pour lancer le jeu qui correspond à la réponse de l'utilisateur via le tableau games

rl.question("Choisissez un jeu à lancer : ", (reponse) => {
    // Je stock la réponse de l'utilisateur dans une variable
    const userReponse = reponse;
    // Je vérifie que la réponse de l'utilisateur est bien un nombre grâce à la fonction isNaN qui signifie "is not a number"
    if (isNaN(userReponse)) {
        // Si ce n'est pas un nombre, je lui demande de ressaisir une valeur
        console.log("Vous devez saisir un nombre");
    } else {
        // Si c'est un nombre, je vérifie que la valeur est comprise entre 1 et 4 car nous avons 4 jeux
        if (userReponse < 1 || userReponse > 4) {
            // Si ce n'est pas le cas, je lui demande de ressaisir une valeur
            console.log("Vous devez saisir un nombre entre 1 et 4");
        } else {
            // Si c'est le cas, je lance le jeu correspondant
            console.log("Vous avez choisi le jeu " + userReponse);
            // Nous allons lancer le jeu correspondant à la réponse de l'utilisateur
            // Pour cela, nous allons utiliser la fonction require qui permet d'importer un module
            require(games[userReponse - 1]);
        }
    }
    // Je ferme l'interface de lecture de ligne
    // Todo améliorer le code pour que l'interface de lecture de ligne ne se ferme que lorsque l'utilisateur a choisi un jeu
    rl.close();
});