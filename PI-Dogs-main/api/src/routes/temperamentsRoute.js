const { Router } = require('express');
const getTemperamentH = require('../handlers/getTemperamentH');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const temperamentsRoute = Router();


temperamentsRoute.get('/', getTemperamentH);


module.exports = temperamentsRoute;