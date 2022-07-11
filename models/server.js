const express = require('express');
const cors = require('cors');

const hbs = require('hbs');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        // Handlebars config
        hbs.registerPartials(__dirname + "/views/partials");
        this.app.set('view engine', 'hbs');

        // Rutas
        this.rootPath = "/";
        this.authPath = '/api/auth/';
        
        // Conectar la base de datos

        // Iniciar los middlewares
        this.middlewares();

        // Iniciar las rutas de la aplicación
        this.routes();
    }

    async connectDB() {

    }   
    
    middlewares() {

        // Cors
        this.app.use(cors());

        // Body parsing
        this.app.use(express.json());

        // Public directory 
        this.app.use(express.static('public'));

        this.app.use(express.urlencoded({
            extended: true
        }));

    }

    routes() {
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.rootPath, require('../routes/rootPath'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servicor corriendo en el puerto: ', this.port);
        });
    }
}

module.exports = Server;