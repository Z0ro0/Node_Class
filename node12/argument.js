//라우팅 매개변수 추출
var express = require('express');

//서버 생성
var app = express();

//라우터 설정
//expressjs.com - guide - routing 참고
app.get('/users/:userId/:bookId', function(request, response) {
  let user = request.params.userId;
  let book = request.params.bookId;
  response.send('<h1>' + user + book + ' Page</h1>');
});

//서버 실행
app.listen(3000, function() {
  console.log('Server running at http://127.0.0.1:3000');
});