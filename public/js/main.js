// For the webpack compiler
require('../scss/main.scss');

// Socket.io connect
let socket = io.connect();


$('.carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false
});