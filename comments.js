// create web server

var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

// create web server
http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    var extname = path.extname(pathname);
    var mimeType = getMimeType(extname);
    var filePath = path.join(__dirname, pathname);

    if (extname === '.js' || extname === '.css') {
        fs.readFile(filePath, function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Could not find or open file for reading\n');
            } else {
                res.writeHead(200, { 'Content-Type': mimeType });
                res.end(data);
            }
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World\n');
    }
}).listen(3000);

console.log('Server running at http://localhost:3000/');

// get mime type
function getMimeType(extname) {
    var mimeType = null;
    switch (extname) {
        case '.html':
            mimeType = 'text/html';
            break;
        case '.js':
            mimeType = 'text/javascript';
            break;
        case '.css':
            mimeType = 'text/css';
            break;
        case '.jpg':
            mimeType = 'image/jpeg';
            break;
        case '.png':
            mimeType = 'image/png';
            break;
        case '.gif':
            mimeType = 'image/gif';
            break;
        case '.ico':
            mimeType = 'image/icon';
            break;
    }
    return mimeType;
}