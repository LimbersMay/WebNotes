const express = require('express');
const cors = require('cors');

const hbs = require('hbs');
const dbConnection = require('../db/config');

const cookieParser = require('cookie-parser');
const { passport } = require('../config/passport');
const session = require('express-session');
const flash = require('express-flash');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        // Handlebars config
        hbs.registerPartials(__dirname + "/views/partials");
        this.app.set('view engine', 'hbs');

        // Rutas
        this.authPath = '/api/auth/';
        this.userPath = '/user';
        this.notePath = '/api/note';
        
        // Conectar la base de datos
        this.connectDB();

        // Iniciar los middlewares
        this.middlewares();

        // Iniciar las rutas de la aplicación
        this.routes();
    }

    async connectDB() {
        await dbConnection();
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

        // Cookie parser
        this.app.use(cookieParser(process.env.COOKIESECRET));

        // Session para el manejo de sesiones
        this.app.use(session({
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: true
        }));

        // Configuración de passport
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        
        this.app.use(flash());
    }

    routes() {
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.userPath, require('../routes/user'));
        this.app.use(this.notePath, require('../routes/note'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servicor corriendo en el puerto: ', this.port);
        });
    }
}

module.exports = Server;