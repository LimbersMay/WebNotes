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

    const { userAccount, userPassword } = getUserLangDictionary( req );
    const { username, email, preferences } = req.user;

    const user = {
        username, 
        email,
        language: preferences.language,
        timezone: preferences.timezone
    }

    const timezones = {
        "UTC-11": "UTC-11:00",
        "UTC-10": "UTC-10:00",
        "UTC-9": "UTC-09:00",
        "UTC-8": "UTC-08:00",
        "UTC-7": "UTC-07:00",
        "UTC-6": "UTC-06:00",
        "UTC-5": "UTC-05:00",
        "UTC-4": "UTC-04:00",
        "UTC-3": "UTC-03:00",
        "UTC-2": "UTC-02:00",
        "UTC-1": "UTC-01:00",
        "UTC": "UTC+00:00",
        "UTC+1": "UTC+01:00",
        "UTC+2": "UTC+02:00",
        "UTC+3": "UTC+03:00",
        "UTC+4": "UTC+04:00",
        "UTC+5": "UTC+05:00",
        "UTC+6": "UTC+06:00",
        "UTC+7": "UTC+07:00",
        "UTC+8": "UTC+08:00",
        "UTC+9": "UTC+09:00",
        "UTC+10": "UTC+10:00",
        "UTC+11": "UTC+11:00"
    };

    const languages = {
        "en-US": "English",
        "es-ES": "Español"
    }

    res.render('profile', {
        userAccount,
        userPassword,
        user,
        options: {
            timezones,
            languages
        }
    });
}

module.exports = {
    login,
    signin,
    home,
    settings
}