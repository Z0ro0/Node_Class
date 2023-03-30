const { Socket } = require('dgram');
var http = require('http');
//클라이언트 요청을 받았을 때 응답 보내기
var server = http.createServer();
//웹 서버 객체를 만듭니다

var port = 3000;
//웹 서버를 시작하여 3000번 포트에서 대기하도록 합니다

server.listen(port, function(){
    console.log('웹 서버가 시작되었습니다: %d', port);
});

//클라이언트 이벤트 처리
server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다');

    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>응답 페이지</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>노드 제이에스로부터의 응답 페이지</h1>');
    res.write('<body>');
    res.write('</html>');

    res.end();
})