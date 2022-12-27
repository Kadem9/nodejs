// Je me suis aidé de ce github pour faire mon jeu
// https://github.com/Bigaston/pendu-bot/blob/master/pendu.js
// Le jeu n'est pas totalement fini par manque de temps

// En suivant les étapes de la doc, il nous indique de créer une interface de lecture de ligne
// Je crée donc une variable qui contient cette interface
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Je fais un tableau de mot à deviner afin d'éviter de modifier à chaque fois le mot
const myArray = ["Messi", "Neymar", "Ronaldo", "Mbappe"];

// Selectionne un mot du tableau au hasard
const words = myArray[Math.floor(Math.random() * myArray.length)];

// Tableau vide pour stocker les lettres devinées
const letterFind = [];

// Nombre de chances restantes
let numberChance = 6;

// Tableau de mes dessins

// Tableau de dessins du pendu
// Trouvé sur http://www.ascii-fr.com/
const hangmanDrawings = [
    `
      +---+
      |   |
          |
          |
          |
          |
    =========
    `,
    `
      +---+
      |   |
      O   |
          |
          |
          |
    =========
    `,
    `
      +---+
      |   |
      O   |
      |   |
          |
          |
    =========
    `,
    `
      +---+
      |   |
      O   |
     /|   |
          |
          |
    =========
    `,
    `
      +---+
      |   |
      O   |
     /|\\  |
          |
          |
    =========
    `,
    `
      +---+
      |   |
      O   |
     /|\\  |
     /    |
          |
    =========
    `,
    `
      +---+
      |   |
      O   |
     /|\\  |
     / \\  |
          |
    =========
    `,
];

// Fonction pour afficher le mot à deviner avec des ____ à la place des lettres non devinées
function displayWord() {
    let display = "";
    for (let i = 0; i < words.length; i++) {
        if (letterFind.includes(words[i])) {
            display += words[i];
        } else {
            display += "_";
        }
    }
    console.log(display);
}

// Fonction pour créer notre bonhome en fonction du nbr de chances restantes
function displayHangman() {
    console.log(hangmanDrawings[6 - numberChance]);
}
// Fonction pour demander à l'utilisateur de deviner une lettre
function guessLetter() {
    rl.question("Devinez une lettre : ", function(letter) {
        if (words.includes(letter)) {
            console.log("Bien joué ! La lettre se trouve dans le mot.");
            letterFind.push(letter);
        } else {
            console.log("Désolé, la lettre ne se trouve pas dans le mot.");
            numberChance--;
        }
        if (numberChance > 0) {
            if (letterFind.length === words.length) {
                console.log("Félicitations, vous avez deviné le mot !");
                rl.close();
            } else {
                displayWord();
                guessLetter();
                displayHangman();
            }
        } else {
            console.log(
                "Vous avez épuisé toutes vos tentatives. Le mot était : " + words,
            );
            rl.close();
        }
    });
}

displayWord();
guessLetter();