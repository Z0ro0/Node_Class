//request 이벤트 처리할 때 writeHead(), write(), end() 메소드로 응답 전송

//웹 서버를 생성하고 실행
require('http').createServer(function(request, response){
    //응답합니다
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>Hello Web Server with Node js</h1>');
}).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});