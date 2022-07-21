const { Router } = require('express');
const { check } = require('express-validator');
const { saveNote, removeNote } = require('../controllers/note');
const { existeNota } = require('../helpers/db-validators');
const { estaAutenticado } = require('../middlewares/note-validator');
const { validarNota } = require('../middlewares/note-validator');

// Método para guardar una nota en bd
const router = Router();

router.post('/saveNote', [
    estaAutenticado,
    check('idNote').custom(existeNota),
    validarNota
], saveNote);

router.post('/removeNote', [
    estaAutenticado,
    check('idNote', 'No es un Id de mongo válido').isMongoId(),
    check('idNote').custom(existeNota),
    validarNota
], removeNote)

module.exports = router;