const fs = require('fs');

const a = fs.readFileSync('a.txt');
const b = fs.readFileSync('b.txt');
const c = fs.readFileSync('c.txt');

fs.readFile('a.txt', (error, file)=>{
    console.log(file);
    console.log(file.toString());
});
fs.readFile('b.txt', (error, file)=>{
    console.log(file);
    console.log(file.toString());
});
fs.readFile('c.txt', (error, file)=>{
    console.log(file);
    console.log(file.toString());
});

console.log(a, b, c);