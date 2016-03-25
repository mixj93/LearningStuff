var gm = require('gm');

gm('bg.jpg')
    .resize(250, 250)
    .colors(1)
    .toBuffer('GIF', function (error, buffer) {
        console.log('data:image/gif;base64,' + buffer.toString('base64'));
    });