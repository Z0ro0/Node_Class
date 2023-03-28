//npm install request 명령어 실행해야 됨
//모듈 추출

const request = require("request");

//request 모듈 사용
const url = "http://www.hanbit.co.kr/store/books/new_book_list.html";
request(url, (error, response, body) => {
  console.log(body);
});