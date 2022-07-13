const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

router.get('/login', (req, res) => {

    if (req.cookies["Errors"]) {
        const errors = req.cookies["Errors"];
        res.clearCookie("Errors", { httpOnly: true });

        return res.render('login', {
            tittle: 'Considere lo siguiente: ',
            errors: errors
        });
    }

    res.render('login');
});

router.get('/signin', (req, res) => {

    if (req.cookies["Errors"]) {
        const errors = req.cookies["Errors"];
        res.clearCookie("Errors", { httpOnly: true });

        return res.render('signin', {
            tittle: 'Considere lo siguiente: ',
            errors: errors
        });
    }

    res.render('signin');
});

module.exports = router;