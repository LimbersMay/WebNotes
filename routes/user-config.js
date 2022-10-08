const { Router } = require('express');
const { check } = require('express-validator');
const { saveConfig } = require('../controllers/user-config');
const { existeEmail, existeNombreUsuario, esPropietarioEmail } = require('../helpers/db-validators');
const { estaAutenticado, validarErrores } = require('../middlewares/note-validator');

const router = Router();

router.put('/save-config', [
    estaAutenticado,
    check('email').optional().isEmail(),
    check('email').optional().custom(esPropietarioEmail),
    check('username').optional().custom(existeNombreUsuario),
    validarErrores
], saveConfig)

module.exports = router;
