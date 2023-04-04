const userList=[
    {name:'홍길동', age:50, adress:'서울시'},
    {name:'이길동', age:40, adress:'인천'}
];

const fs = require("fs");

fs.writeFile('./mlist.json', JSON.stringify(userList), function(error){
    console.log('저장완료;')
})