//  Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.

function returnNumberSort(array) {
    array.sort();
    return array.reverse();
}

const $array = [4, 9, 7, 3];
console.log(returnNumberSort($array));