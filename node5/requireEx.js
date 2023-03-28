var http = require('http');

var server = http.createServer();

var port = 3100;//포트 사용시 에러발생할 수 있음 숫자 바꿔서 사용
server.listen(port, function () {
  console.log("웹 서버가 시작되었습니다. : %d", port);
});
//클라이언트 연결 이벤트 처리
//이벤트는 on으로 처리 connection이 발생하면 내부적으로 socket 생성
server.on("connection", function (socket) {
  console.log(
    "클라이언트가 접속했습니다 : %s, %d",
    socket.remoteAddress,
    socket.remotePort
  );
});

//클라이언트의 요청(reuest) 이벤트 처리
server.on("request", function (req, res) {
  console.log("클라이언트 요청이 들어왔습니다.");
  console.dir(req);
});

//서버 종료 이벤트 처리
server.on("close", function () {
  console.log("서버가 종료됩니다.");
});

//ctrl c로 서버 나가야 3100에서 실행할 수 있음
//localhost:3000 접속하면 웹에 초록색 주르륵 뜸