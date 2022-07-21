const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.redirect('/user/login')
});

module.exports = router;
