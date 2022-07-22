const { Router } = require('express');
const { check } = require('express-validator');
const { saveNote, removeNote } = require('../controllers/note');
const { existeNota } = require('../helpers/db-validators');
const { estaAutenticado } = require('../middlewares/note-validator');
const { validarErrores } = require('../middlewares/note-validator');

// Método para guardar una nota en bd
const router = Router();

router.post('/saveNote', [
    estaAutenticado,
    check('idNote').custom(existeNota),
    validarErrores
], saveNote);

router.post('/removeNote', [
    estaAutenticado,
    check('idNote', 'No es un Id de mongo válido').isMongoId(),
    check('idNote').custom(existeNota),
    validarErrores
], removeNote)

module.exports = router;