// Archivo de configuracion y conexion a la BD
const mainRouter = require('./mainRouter');

function routerApp (app){
  app.use('/', mainRouter);
}

module.exports = routerApp;