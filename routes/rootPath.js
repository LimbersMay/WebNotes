const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;