// Ecrivez une fonction qui prend un tableau de nombre en paramètre et qui retourne le plus grand nombre du tableau

function getMaxNumber(tableau) {
    // On initialise la variable qui va contenir le plus grand nombre à la première valeur du tableau
    let maxNumber = tableau[0];

    // On parcourt le tableau
    for (let i = 0; i < tableau.length; i++) {
        // Si la valeur actuelle est plus grande que le plus grand nombre enregistré jusqu'à présent, on met à jour le plus grand nombre
        if (tableau[i] > maxNumber) {
            maxNumber = tableau[i];
        }
    }

    // On retourne le plus grand nombre trouvé
    return maxNumber;
}

console.log(getMaxNumber([1, 2, 3, 4, 5, 66, 7, 8, 9, 10]));