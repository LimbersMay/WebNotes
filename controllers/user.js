const { getUserLangDictionary } = require("../helpers/user-preferences");
const validarCookies = require("../helpers/validar-cookies");

const login = (req, res) => {
    const fields_errors = validarCookies(req, res);

    const { login } = getUserLangDictionary( req );

    res.render('login', {
        errors: req.flash('error'),
        fields_errors,
        dictionary: login
    });
}

const signin = (req, res) => {
    const field_errors = validarCookies(req, res);

    const { signIn } = getUserLangDictionary( req );

    res.render('signin', {
        fields_errors: field_errors,
        dictionary: signIn
    });
}

const home = (req, res) => {

    const { notes } = req.user;

    const { home } = getUserLangDictionary( req );

    res.render('home', {
        nota: notes,
        dictionary: home
    });
}

const settings = (req, res) => {
    res.render('profile');
}

module.exports = {
    login,
    signin,
    home,
    settings
}