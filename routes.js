const express = require('express');
const router = express.Router();

const db = require('./database.js');

router.get('/', (req, res, next) => {
    res.render('pages/home', db);
});

router.get('/open-day/:openDayId', (req, res, next) => {
    const openDayId = req.params.openDayId;
    res.locals.openDayId = openDayId;
    res.locals.data = db['open-days'][openDayId];
    res.render('pages/open-day');
});

router.get('/open-day/:openDayId/:listId', (req, res, next) => {
    const openDayId = req.params.openDayId;
    const listId = req.params.listId;
    res.locals.openDayId = openDayId;
    res.locals.listId = listId;
    res.locals.data = db['open-days'][openDayId]['lists'][listId];
    res.render('pages/open-day-list');
});

router.get('*', (req, res, next) => {
    res.redirect('/');
});

module.exports = router;