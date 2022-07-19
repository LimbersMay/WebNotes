
const estaAutenticado = (req, res, next) => {
    // Verificamos que el usuario esté autenticado
    if (req.isAuthenticated()) return next();
    res.redirect('/user/login');

    next();
}

module.exports = {
    estaAutenticado
}