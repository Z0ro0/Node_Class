//모듈 추출
var express = require("express");
var static = require('serve-static');

//서버 생성
var app = express();

//미들 웨어 설정
app.use(express.static(__dirname + '/public'));//루트로 public 접근 가능
app.use(function (request, response) {
    //응답
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<img src = "/cat.jpg" width = "100%"/>');
});

//서버 실행
app.listen(3000, function() {
    console.log('고양이 보고 싶으면 localhost:3000으로');
  });