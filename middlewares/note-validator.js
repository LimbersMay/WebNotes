const { validationResult } = require("express-validator");

const estaAutenticado = (req, res, next) => {
    // Verificamos que el usuario esté autenticado
    if (req.isAuthenticated()) return next();
    return res.redirect('/user/login');
}

const validarErrores = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors
        });
    }

    next();
}

module.exports = {
    estaAutenticado,
    validarErrores
}