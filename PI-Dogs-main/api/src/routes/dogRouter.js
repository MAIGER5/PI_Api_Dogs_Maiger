const { Router } = require('express');
const { getDogsH, getDetailH, getByRaceH, createDogsH } = require('../handlers/getDogsH');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const dogRouter = Router();

dogRouter.get('/', getDogsH);

dogRouter.get('/:idRaza', getDetailH);

dogRouter.get('/name?="..."', getByRaceH);

dogRouter.post('/', createDogsH);

module.exports = dogRouter;
