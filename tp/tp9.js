// Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.
// Exercice presque similaire au 8
// En effet nous devons cette fois-ci mettre uniquement nos voyelles dans notre variable let
// Puis nous devons les compter avec la méthode length

function numberVoyelles(str) {
    let myVoyelles = "";

    for (i = 0; i < str.length; i++) {
        const regex = /[aeiouy]/i;

        if (regex.test(str[i])) {
            myVoyelles += str[i];
        }
    }
    return "Il y a " + myVoyelles.length + " voyelles";
}

console.log(numberVoyelles("Bonjour, comment allez-vous ?"));