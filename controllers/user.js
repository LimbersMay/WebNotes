const { getUserLangDictionary } = require("../helpers/user-preferences");
const validarCookies = require("../helpers/validar-cookies");

const getUserPreferences = ( req, res ) => {

    const { userTimeZone } = req.body;
    const { userLang } = req.body;

    process.env.TZCLIENT = userTimeZone;
    process.env.USER_LANGUAGE = userLang;

    res.status(200).json({
        msg: 'OK'
    });
}

const login = (req, res) => {
    const fields_errors = validarCookies(req, res);

    const { login } = getUserLangDictionary();

    res.render('login', {
        errors: req.flash('error'),
        fields_errors,
        dictionary: login
    });
}

const signin = (req, res) => {
    const field_errors = validarCookies(req, res);

    const { signIn } = getUserLangDictionary();

    res.render('signin', {
        fields_errors: field_errors,
        dictionary: signIn
    });
}

const home = (req, res) => {

    const { notes } = req.user;

    const { home } = getUserLangDictionary();

    res.render('home', {
        nota: notes,
        dictionary: home
    });
}

module.exports = {
    login,
    signin,
    home,
    getUserPreferences
}