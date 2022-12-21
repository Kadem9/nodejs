// Écrivez un programme Node.js qui utilise le module events pour créer un émetteur d'événements personnalisé.

const events = require("events");

const myEmitter = new events.EventEmitter();

myEmitter.on("myEvent", () => {
    console.log("Evenement emis");
});

myEmitter.emit("myEvent");