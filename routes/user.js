const { Router } = require('express');
const { login, signin, home, settings } = require('../controllers/user');

const router = Router();

router.get('/login', (req, res, next) => {
   
    // Comprobamos si está autenticado
    if (req.isAuthenticated()) return res.redirect('/user/home');
    next();

} ,login);

router.get('/signin', (req, res, next) => {

    // Comprobamos si está autenticado
    if (req.isAuthenticated()) return res.redirect('/user/home');
    next();

}, signin);

router.get('/profile', (req, res, next) => {
    
    // Renderizamos solo si está autenticado
    if (req.isAuthenticated()) return next();
    res.redirect('/user/login');
}, settings)

router.get('/home', (req, res, next) => {
    // Comprobamos si el usuario está autenticado
    if (req.isAuthenticated()) return next();
    res.redirect('/user/login');

}, home);


module.exports = router;