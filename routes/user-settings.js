const { Router } = require('express');
const { check } = require('express-validator');
const { saveSettings } = require('../controllers/user-settings');
const { existeEmail, existeNombreUsuario } = require('../helpers/db-validators');
const { estaAutenticado, validarErrores } = require('../middlewares/note-validator');

const router = Router();

router.put('/saveSettings', [
    estaAutenticado,
    check('email').isEmail(),
    check('email').custom(existeEmail),
    check('username').custom(existeNombreUsuario),
    validarErrores
], saveSettings)

module.exports = Router;
