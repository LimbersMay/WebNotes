
const { Router } = require('express');
const { check } = require('express-validator');

const { login, signIn } = require('../controllers/auth');
const { existeEmail } = require('../helpers/db-validators');
const validatePassword = require('../middlewares/password-validator');
const validarCampos = require('../middlewares/validar-campos');

const router = Router();

router.post('/login', [
    check('email', 'El correo no es válido').isEmail(),
    check('password', 'La contraseña no puede estar vacia').not().isEmpty(),
    validarCampos
], login);

router.post('/signin', [
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('email', 'El correo no es válido').isEmail(),
    check('email').custom(existeEmail),
    check('password').custom(validatePassword),
    check('password', 'La longitud mínima de la contraseña es 8').isLength({min: 8}),
    validarCampos
], signIn);

module.exports = router;