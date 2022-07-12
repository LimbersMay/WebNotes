const bcrypt = require('bcryptjs');
const { response, request } = require('express');

const login = async(req = request, res = response) => {
    
    // Obtenemos el correo y contraseña del body 
    const { email, password } = req.body;

    res.json({
        userEmail: email,
        userPassword: password
    })
};

const signUp = async(req, res) => {
    
};

module.exports = {
    login,
    signUp
}