
const { Router } = require('express');
const { check } = require('express-validator');

const { login, signUp } = require('../controllers/auth');
const validarCampos = require('../middlewares/validar-campos');

const router = Router();

router.post('/login', [
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], login);

router.post('/signup', [], signUp);

module.exports = router;