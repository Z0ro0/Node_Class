const fs = require("fs");

fs.writeFile('./mlist.json', (err, data)=>{
    if(err){
        console.log('파일을 읽을 수 없음');
    }else{
        const json = JSON.parse(data.toString());
        for(let i = 0; i<json.length; i++){
            console.log(`이름 ${json[i].name} 나이 ${json[i].age} 주소 ${json[i].adress}`);
        }
    }
});