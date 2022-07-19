const { Router } = require('express');
const { check } = require('express-validator');
const { saveNote } = require('../controllers/note');
const { estaAutenticado } = require('../middlewares/note-validator');
const { validarNota } = require('../middlewares/validar-campos');

// Método para guardar una nota en bd
const router = Router();

router.post('/saveNote', [
    estaAutenticado,
    check('idNote', 'No es un Id de mongo válido').isMongoId(),
    validarNota
] , saveNote);


module.exports = router;