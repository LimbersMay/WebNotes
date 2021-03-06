
const { response } = require('express');
const { validationResult } = require('express-validator');

const validarCampos = (req, res = response, next) => {

    const errors = validationResult(req);

    const listErrors = []; 
    
    errors.array().forEach(dict => {
        listErrors.push(dict.msg); 
    });
    
    if (!errors.isEmpty()) {

        res.cookie('Errors', listErrors, {httpOnly:true});
        return res.redirect(req.get('referer'));
    }

    next();
};

module.exports = {
    validarCampos
};
