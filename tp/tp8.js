// Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.

function upperCase(str) {
    // Je défini une variable vide qui comportera ma phrase recomposée avec les majuscules
    let mySentence = "";
    // Je fais une boucle for, qui parcourera chaque lettre du paramètre str
    for (let i = 0; i < str.length; i++) {
        // je défini les caractères qui doivent être transformer en majuscule en ajoutant la flèche i pour dire que je souhaite ignorer la casse
        const regex = /[aeiouy]/i;
        // j'ajoute une condition IF et je vais utiliser la méthode test des regExp
        // Voici la définition exacte de cette méthode : La test() méthode exécute une recherche de correspondance entre une expression régulière et une chaîne spécifiée. Retourne true ou false.
        // Dans notre cas nous allons tester si notre str[i] fait partie de notre constante regex donc aeiouy
        if (regex.test(str[i])) {
            // si oui, nous mettons en majuscule cette lettre
            mySentence += str[i].toUpperCase();
        } else {
            // si non, nous remettons la lettre comme elle l'était dans la variable mySentence
            mySentence += str[i];
        }
    }
    return mySentence;
}

console.log(upperCase("Bonjour à tous"));

// lien de la doc : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test