const { Router } = require('express');
const { login, signin, home, getUserPreferences } = require('../controllers/user');

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

router.post('/get-preferences', getUserPreferences);

router.get('/home', (req, res, next) => {
    // Comprobamos si el usuario está autenticado
    if (req.isAuthenticated()) return next();
    res.redirect('/user/login');

}, home);


module.exports = router;