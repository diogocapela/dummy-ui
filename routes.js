const express = require('express');
const router = express.Router();

const db = require('./database.js');

router.get('/', (req, res, next) => {
    res.render('pages/home', db);
});

router.get('*', (req, res, next) => {
    res.redirect('/');
});

module.exports = router;