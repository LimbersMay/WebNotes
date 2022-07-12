
const { Schema, model } = require('mongoose');

const userSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    correo: {
        type: String,
        required: [true, 'El correo es requerido']
    },
    password: {
        type: String,
        required: [true, 'El password es requerido']
    },
    notas: [{
        tituloNota: String,
        contenido: String
    }]
});

module.exports = model('User', userSchema);
