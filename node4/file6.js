const fs = require('fs');
fs.writeFile('output2.txt', '안녕하세여? ㅎㅎ', (error) => {
    console.log('파일 쓰기를 완료했습니다');
});