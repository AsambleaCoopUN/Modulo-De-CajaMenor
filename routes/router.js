const mainRouter = require('./mainRouter');
const server = require('./server');
const usersRouter = require('./usersRouter');

function routerApp (app){
  app.use('/', mainRouter);
  app.use('/server', server);
  app.use('/users', usersRouter);
}

module.exports = routerApp;