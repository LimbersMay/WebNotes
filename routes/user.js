const { Router } = require('express');
const { check } = require('express-validator');
const validarCookies = require('../helpers/validar-cookies');

const router = Router();

router.get('/login', (req, res) => {
    
    validarCookies(req, res, 'login');

    res.render('login');
});

router.get('/signin', (req, res) => {
    
    validarCookies(req, res, 'signin');

    res.render('signin');
});

router.get('/home', (req, res) => {
    res.render('home')
});

module.exports = router;