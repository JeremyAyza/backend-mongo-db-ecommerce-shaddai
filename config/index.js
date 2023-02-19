// Requerimos el modulo dotenv y accedemos a config que recibe el path del archivo .env, pero en este caso como está en el root, lo asume
require('dotenv').config();

// Requerimos las 2 configuraciones que definimos antes
const PRODUCTION = require('./production');
const DEVELOPMENT = require('./development');

const { NODE_ENV } = process.env;

// Podemos que por default estamos en desarrollo
let currentEnvironment = DEVELOPMENT;

// Mediante la variable de entorno NODE_ENV determinamos en qué ambiente estamos, así podemos exportar el entorno que necesitamos según el caso
if (NODE_ENV === "production") {
     currentEnvironment = PRODUCTION;;
}

// exportamos las configuraciones del entorno
module.exports = currentEnvironment;