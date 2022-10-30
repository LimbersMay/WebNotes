
const mongoose = require('mongoose');

const dbConnection = async() => {

    return new Promise((resolve, reject) => {
        try {
            mongoose.connect(process.env.MONGODB_CNN);
            console.log('MongoDB connected');
            resolve('Bases de datos online');
        }

        catch (error) {
            console.log("MongoDB didn't can connect");
            reject('No se pudo conectar a la base de datos')
        } 
    });
}

module.exports = dbConnection;
