'use strict';

const http = require('http');
const path = require('path');

const express = require('express');
const socketIO = require('socket.io');
const hbs = require('hbs');
const logger = require('morgan');

const routes = require('./routes.js');

let app = express();
let server = http.createServer(app);
let io = socketIO(server);
let port = process.env.PORT || '3000';

app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static(__dirname + '/public'));

// hbs
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));

// morgan
app.use(logger('dev'));

app.use('/', routes);

let socketList = {};

io.on('connection', (socket) => {

    // New socket connected
    socketList[socket.id] = socket;
    console.log(`The socket with ID ${socket.id} has just joined the server.`);

    // Socket disconnected
    socket.on('disconnect', () => {
        delete socketList[socket.id];
        console.log(`The socket with ID ${socket.id} has left the server.`);
    });

});

server.listen(app.get('port'), () => {
    console.log(`The server is now running on port ${app.get('port')}.`);
});