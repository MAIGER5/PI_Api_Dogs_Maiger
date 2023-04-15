const { Router } = require('express');
const dogRouter = require('./dogRouter');
const temperamentsRoute = require('./temperamentsRoute');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

mainRouter.use('/dogs', dogRouter);
mainRouter.use('/temperaments', temperamentsRoute);



module.exports = mainRouter;
