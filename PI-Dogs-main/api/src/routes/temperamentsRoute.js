const { Router } = require('express');
const getTemperamentH = require('../handlers/getTemperamentH');
const getTemperamentBdH = require('../handlers/getTempBD');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const temperamentsRoute = Router();


temperamentsRoute.get('/', getTemperamentH);
temperamentsRoute.get('/Bd', getTemperamentBdH);


module.exports = temperamentsRoute;