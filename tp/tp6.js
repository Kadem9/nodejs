// Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet.

function returnProperty(objects, propertyName) {
    // Déclaration de la fonction avec deux arguments : objects et propertyName
    // propertyName est le nom de la propriété dont nous voulons récupérer les valeurs

    let values = [];
    // Création d'un tableau vide pour stocker les valeurs de la propriété

    for (let i = 0; i < objects.length; i++) {
        // Boucle sur chaque objet dans le tableau objects

        let object = objects[i];
        // Récupération de l'objet courant

        values.push(object[propertyName]);
        // Ajout de la valeur de la propriété spécifiée de l'objet courant au tableau values
    }

    return values;
    // Retour du tableau de valeurs
}
let objects = [
    { firstname: "Kadem", lastname: "Garnier", age: 23 },
    { firstname: "Enzo", lastname: "Loncle", age: 23 },
    { firstname: "Khadim", lastname: "Cisse", age: 23 },
];
console.log(returnProperty(objects, "firstname"));
console.log(returnProperty(objects, "age"));