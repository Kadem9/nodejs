// Écrivez un programme Node.js qui utilise le module querystring pour analyser une chaîne de requête URL.

const querystring = require("querystring");

const myUrl = "https://www.asmanissieux.com/administration/commandes&page=4";

console.log(querystring.parse(myUrl));