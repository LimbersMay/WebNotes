const passport = require('passport');
const PassportLocal = require('passport-local').Strategy;

const GoogleStrategy = require('passport-google-oidc');

const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const getApiUrl = require('../helpers/getApiUrl');

passport.use(new PassportLocal(async (username, password, done) => {

    // Comprobamos que el usuario con el correo exista
    const usuario = await User.findOne({ email: username });

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
passport.deserializeUser(async (_id, done) => {
    const user = await User.findById(_id);
    done(null, user);
});

passport.use(new GoogleStrategy({

    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${ getApiUrl() }/api/auth/google/callback`

}, async (issuer, profile, cb) => {

    const usuario = await User.findOne({
            $or: [
                {"providerId": profile.id, "provider": "google"},
                {"email": profile.emails[0].value}
            ]
        }
    );

    // Si el usuario no existe lo creamos
    if (!usuario) {

        const username = profile.displayName;
        const email = profile.emails[0].value;
        const password = '.';
        const provider = 'google';
        const providerId = profile.id;

        const usuario = new User({ username, email, password, provider, providerId });
        usuario.save();
        return cb(null, usuario);
    }

    return cb(null, usuario);
}));

module.exports = {
    passport
}