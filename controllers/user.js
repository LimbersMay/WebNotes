const validarCookies = require("../helpers/validar-cookies");

const login = (req, res) => {
    const fields_errors = validarCookies(req, res);

    res.render('login', {
        errors: req.flash('error'),
        fields_errors
    });
}

const signin = (req, res) => {
    const field_errors = validarCookies(req, res);

    res.render('signin', {
        fields_errors: field_errors
    });
}

const home = (req, res) => {

    const { notes } = req.user;

    res.render('home', {
        nota: notes
    });
}

module.exports = {
    login,
    signin,
    home
}