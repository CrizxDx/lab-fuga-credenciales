// Archivo: app.js
const database = require('db-connection');

// MALA PRÁCTICA: Credencial hardcodeada
const apiKey = "sk_live_1234567890abcdefghijklmnopqrstuvwxyz12";

function connect() {
    database.connect(apiKey);
    console.log("Conectado a la base de datos");
}
