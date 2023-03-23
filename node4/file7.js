//npm init -> package.json 생성됨
let fs = require('fs');

let data = fs.readFileSync('./package.json', 'utf8');
console.log(data);//package.json 지우고 돌리면 오류남
