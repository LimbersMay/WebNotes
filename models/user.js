
const { Schema, model } = require('mongoose');

const userSchema = Schema({

    username: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    email: {
        type: String,
        required: [true, 'El correo es requerido']
    },
    password: {
        type: String,
        required: [true, 'El password es requerido']
    },
    notes: [{
        id: String,
        title: String,
        content: String,
        date: Date
    }]
});

module.exports = model('User', userSchema);
