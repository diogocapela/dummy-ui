const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('pages/home');
});

router.get('*', (req, res, next) => {
    res.redirect('/');
});

module.exports = router;