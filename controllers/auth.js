const { response, request } = require('express');

const bcryptjs = require('bcryptjs');

const User = require('../models/user');

const login = async(req = request, res = response) => {
    
    // Obtenemos el correo y contraseña del body 
    const { email, password } = req.body;

    // Comprobamos que el correo esté registrado
    const usuario = await User.findOne({email});

    if (!usuario) {
        res.cookie('Errors', 'Este correo no está registrado', {httpOnly:true});
        return res.status(401).redirect('/user/login')
    }

    // Si existe el usuario, comprobamos que coincida la contraseña
    const match = bcryptjs.compareSync(password, usuario.password);

    if (!match) {
        res.cookie('Errors', 'La contraseña no es correcta', {httpOnly:true});
        return res.status(401).redirect('/user/login');
    }

    // Si pasa por todas las comprobaciones, renderizamos la página de home
    res.status(200).redirect('/user/home');
};

const signIn = async(req, res = response) => {

    const { username, email, password } = req.body;

    const user = new User({username, email, password});

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    res.redirect('/user/login');
};

const logOut = (req, res) => {
    req.logout((err) => {
        if (err) return next(err);

        res.redirect('/user/login');
    });
}

module.exports = {
    login,
    signIn,
    logOut
}