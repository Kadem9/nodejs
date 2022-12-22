// Je créer une fonction removeLetter qui prend en paramètre un string
function removeLetter(str) {
    return str.replace(/[aeiouy]/gi, "");
    // J'utilise la fonction replace et je lui indique que je souhaite supprimer les lettres aeiou, j'utilise ensuite la flèche g pour dire que je souhaite supprimer toutes les lettres et i pour dire que je souhaite ignorer la casse
}

console.log(removeLetter("Bonjour"));

// Je me suis aidé de cette page pour cette exercice : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace