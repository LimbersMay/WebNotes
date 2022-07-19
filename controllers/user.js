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

    // Formateamos la fecha
    const notesFormatted = notes.map(note => {

        let {_id, date, title, content} = note;

        return {
            _id,
            date: date.toDateString(),
            title,
            content
        };
    });

    res.render('home', {
        nota: notesFormatted
    });
}

module.exports = {
    login,
    signin,
    home
}