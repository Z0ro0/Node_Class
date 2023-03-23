const fs = require('fs');

fs.readFile('text.txt', (error, file)=>{
    console.log(file);
    console.log(file.toString());
});