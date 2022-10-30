require('dotenv').config({
    path: `.${process.env.NODE_ENV}.env`
});

const Server = require('./models/server');
const server = new Server();

server.listen();