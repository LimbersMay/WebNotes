const bcryptjs = require('bcryptjs');
const { response, request } = require('express');

const User = require('../models/user');

const login = async(req = request, res = response) => {
    
    // Obtenemos el correo y contraseña del body 
    const { email, password } = req.body;

    res.json({
        userEmail: email,
        userPassword: password
    })
};

const signIn = async(req, res = response) => {

    const { username, email, password } = req.body;

    const user = new User({username, email, password});

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    res.redirect('/login');
};

module.exports = {
    login,
    signIn
}