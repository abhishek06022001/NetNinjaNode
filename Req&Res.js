const http = require('http');
const fs = require('fs');
const _ = require('lodash');
const server = http.createServer((req, res) => {
    // set header content type
    console.log("will this log the number again ");
    const num = _.random(0, 20);
    console.log(num);
    let path = './views';
    switch (req.url) {
        case '/about':
            console.log("another request received");
            path += '/about.html'; res.statusCode = 200;
            break;
        case '/about_me':

            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        case '/404':
            path += '/404.html'; res.statusCode = 404;
            break;
        default:
            path += '/index.html'; res.statusCode = 200;
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data.toString());
            res.end();
        }
    });


});
server.listen(3000, 'localhost', () => {
    console.log("Listening to the server ");
})
