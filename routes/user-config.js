const { Router } = require('express');
const { check } = require('express-validator');
const { 
    putUserConfig, 
    putUserPassword, 
    getUserConfig, getUserLangDict 
} = require('../controllers/user-config');

const { esPropietarioEmail } = require('../helpers/db-validators');
const { estaAutenticado, validarErrores } = require('../middlewares/note-validator');
const { validatePasswordChange } = require('../middlewares/password-validator');

const router = Router();

router.put('/save-config', [
    estaAutenticado,
    check('email', 'Invalid email').optional().isEmail(),
    check('email').optional().custom(esPropietarioEmail),
    validarErrores
], putUserConfig);

router.put('/change-password', [
    estaAutenticado,
    check(['currentPassword']).custom(validatePasswordChange),
    validarErrores
], putUserPassword);

module.exports = router;
