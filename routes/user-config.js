const { Router } = require('express');
const { check } = require('express-validator');
const { userSaveConfig, userChangePassword } = require('../controllers/user-config');
const { existeNombreUsuario, esPropietarioEmail } = require('../helpers/db-validators');
const { estaAutenticado, validarErrores } = require('../middlewares/note-validator');
const { validatePasswordChange } = require('../middlewares/password-validator');

const router = Router();

router.put('/save-config', [
    estaAutenticado,
    check('email', 'Invalid email').optional().isEmail(),
    check('email').optional().custom(esPropietarioEmail),
    check('username').optional().custom(existeNombreUsuario),
    validarErrores
], userSaveConfig);

router.put('/change-password', [
    estaAutenticado,
    check(['currentPassword']).custom(validatePasswordChange),
    validarErrores
], userChangePassword);

module.exports = router;
