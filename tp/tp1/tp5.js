function numberToWords(number) {
    // Avant de commencer quoi que-ce soit nous faisons une vérif pour voir si le chiffre est strictement égal à 0 et donc on renvoie "zéro"
    if (number === 0) {
        return "zero";
    }

    // tableau des noms des nombres de 0 à 19
    const numberBelowTwenty = [
        "un",
        "deux",
        "trois",
        "quatre",
        "cinq",
        "six",
        "sept",
        "huit",
        "neuf",
        "dix",
        "onze",
        "douze",
        "treize",
        "quatorze",
        "quinze",
        "seize",
        "dix-sept",
        "dix-huit",
        "dix-neuf",
    ];

    // Tableau des noms des dizaines
    const tens = [
        "vingt",
        "trente",
        "quarante",
        "cinquante",
        "soixante",
        "soixante-dix",
        "quatre-vingts",
        "quatre-vingt-dix",
    ];

    // Tableau des noms des centaines
    const hundreds = [
        "cent",
        "deux-cents",
        "trois-cents",
        "quatre-cents",
        "cinq-cents",
        "six-cents",
        "sept-cents",
        "huit-cents",
        "neuf-cents",
    ];

    // Si le nombre est inférieur à 20, nous pouvons simplement utiliser le tableau numberBelowTwenty qui comporte les nombres de 0 à 19
    // Nous mettons bien - 1 à chaque fois car on ne compte pas le zéro donc zéro = un
    if (number < 20) {
        return numberBelowTwenty[number - 1];
    }

    // Dans le cas inverse nous allons décomponser nos chiffres
    // Initialisation de nos variables
    // Variable word qui contiendra le nombre
    let words = "";

    // Nous allons utiliser modulo
    // Voici sa définition  L'opérateur du reste (%) renvoie le reste de la division de l'opérande gauche par l'opérande droit. Le résultat a toujours le signe du numérateur.

    // Dans notre premier cas nous allons vouloir récupérer les unités, donc nous ferons modulo 10 qui nous retournera toujours l'unité par exemple 258 % 10 = 8, 306 % 10 = 6...
    let units = number % 10;
    // Pour avoir les centaines nous faisons pareil mais avec 100 pour obtenir les centaines
    let tensNumber = (number - units) % 100;
    let hundredsNumber = (number - tensNumber - units) % 1000;

    // Si le nombre a des centaines, nous l'ajoutons à la chaîne de caractères
    if (hundredsNumber > 0) {
        // Nous allons chercher dans notre tableau hundreds le nombre qui correspond et nous allons l'ajouter à words
        // Nous utilisons la méthode floor de math pour éviter d'avoir des chiffres à virgules, celle-ci renvoie le plus grand entier qui est inférieur ou égal à un nombre

        words += hundreds[Math.floor(hundredsNumber / 100) - 1] + " ";
    }

    // si le nombre a des dizaines, nous l'ajoutons à la chaîne de caractères
    if (tensNumber > 0) {
        // si le nombre a un seul chiffre des unités, nous l'ajoutons à la fin de la chaîne de caractères des dizaines
        if (units > 0) {
            words +=
                tens[Math.floor(tensNumber / 10) - 2] +
                "-" +
                numberBelowTwenty[units - 1] +
                " ";
        } else {
            words += tens[Math.floor(tensNumber / 10) - 2] + " ";
        }
    } else if (units > 0) {
        // sinon, si le nombre a un seul chiffre des unités, nous l'ajoutons à la chaîne de caractères
        words += numberBelowTwenty[units - 1];
    }

    if (number >= 1000) {
        return "Le nombre doit être inférieur à mille";
    }

    // retourne la chaîne de caractères finale
    return words;
}

console.log(numberToWords(999));