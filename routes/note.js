const { Router } = require('express');
const { check } = require('express-validator');
const { saveNote } = require('../controllers/note');

// Método para guardar una nota en bd
const router = Router();

router.post('/saveNote', (req, res, next) => {

    // Verificamos que el usuario esté autenticado
    if (req.isAuthenticated()) return next();
    res.redirect('/user/login');

}, saveNote);


module.exports = router;