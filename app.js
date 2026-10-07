// Archivo: app.js
require('dotenv').config();
const database = require('db-connection');

// El secreto ahora se inyecta de forma segura desde el entorno
const apiKey = process.env.API_KEY; 

function connect() {
    database.connect(apiKey);
    console.log("Conectado a la base de datos de forma segura");
}
