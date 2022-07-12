
const { response } = require('express');
const { validationResult } = require('express-validator');

const validarCampos = (req, res = response, next) => {

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {

        return res.render('login', {
            message: 'Wrong password or email'
        });
    }

    next();
};


module.exports = validarCampos;
