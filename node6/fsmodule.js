const fs = require('fs');
const http = require('http');

http.createServer(function (req, res) {
    fs.readFile('HTMLPage.html', function (err, data) {
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(data);
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
})