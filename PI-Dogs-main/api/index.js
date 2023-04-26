//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');  //importando la instancia de sequelize de db.js

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {  //sincroniza o crea la talba definida en el models, si ya existe la suelta, recordar que mientras este true cada vez que se sincronice se reinicia la base datos, en ese sentido nunca nos queda guardado en nada en la base de datos
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    console.log('estoy en el servidor')
  });
});
