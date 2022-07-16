const passport = require('passport');
const PassportLocal = require('passport-local').Strategy;

const User = require('../models/user');
const bcryptjs = require('bcryptjs');

passport.use(new PassportLocal( async(username, password, done) => {

    // Comprobamos que el usuario con el correo exista
    const usuario = await User.findOne({email: username});

    // Si no existe
    if (!usuario) {
        return done(null, false, {
            message: 'Incorrect email or password'
        });
    }

    // Si existe, comprobamos que la contraseña sea correcta
    const match = bcryptjs.compareSync(password, usuario.password);

    if (!match) {
        return done(null, false, {
            message: 'Incorrect email or password'
        });
    }

    // Si llega al final, la autenticación es correcta
    done(null, usuario);
}));

// {id: 1, name: Juan}
// 1 -> Serialización, pasar de un objeto a un dato muy particular
passport.serializeUser((user, done) => {
    done(null, user._id);
});

// 1 -> {id: 1, name: Juan}. Deserializacion Pasar del identificador al objeto
passport.deserializeUser( async(_id, done) => {
    const user = await User.findById(_id);
    done(null, user);
});

module.exports = {
    passport
}