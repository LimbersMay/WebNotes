
const { Router } = require('express');
const { check } = require('express-validator');
const { passport } = require('../config/passport');

const { signIn, logOut } = require('../controllers/auth');
const { existeEmail } = require('../helpers/db-validators');
const { validatePassword } = require('../middlewares/password-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/login', [
    check('username', 'Invalid email').isEmail(),
    check('password', 'Password cannot be empty').not().isEmpty(),
    validarCampos,
    passport.authenticate('local', {
        successRedirect: '/user/home',   
        failureRedirect: '/user/login',
        failureFlash: true
    })
]);

router.get('/google', [
    passport.authenticate('google', { scope: ['profile', 'email']}),
]);

router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/user/login',
    successRedirect: '/user/home'
}))

router.post('/signin', [
    check('username', 'Username is neccesary').not().isEmpty(),
    check('email', 'Invalid email').isEmail(),
    check('email').custom(existeEmail),
    check('password').custom(validatePassword),
    check('password', 'The maximun password length is 8').isLength({min: 8}),
    validarCampos
], signIn);

router.post('/logout', logOut);

module.exports = router;