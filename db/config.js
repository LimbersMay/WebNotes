
const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('Bases de datos online');
    } catch (error) {
        console.log('No se pudo conectar a la base de datos')
    }
}

module.exports = dbConnection;
