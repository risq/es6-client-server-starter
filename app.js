const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db/db.json');

server.use(jsonServer.defaults());
server.use(router);

server.listen(3000);

module.exports = server;
