const userList=[
    {name:'홍길동', age:50, adress:'서울시'},
    {name:'이길동', age:40, adress:'인천'}
];

const fs = require("fs");
 fs.writeFile('./monList.json', JSON.stringify(userList), function(error) {
   console.log("저장완료!");
});

fs.readFile('./monList.json', (err, data) => {
  if (err) {
    console.log('파일을 읽을 수 없어요 ㅜㅜ');
  } else {
    const json = JSON.parse(data.toString());
    for (let i = 0; i < json.length; i++) {
      console.log(`이름은 ${json[i].name}, 나이는 ${json[i].age}살 입니다!`);
    }
  }
});