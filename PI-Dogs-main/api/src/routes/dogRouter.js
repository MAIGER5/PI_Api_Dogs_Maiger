const { Router } = require('express');
const { getDogsH, getDetailH, createDogsH } = require('../handlers/getDogsH');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const dogRouter = Router();

dogRouter.get('/', getDogsH);

dogRouter.get('/:idRaza', getDetailH);

dogRouter.post('/', createDogsH);

// dogRouter.get('/name', getByRaceH);

module.exports = dogRouter;

