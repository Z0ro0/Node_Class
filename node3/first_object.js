function plus(a, b){
    return a+b;
}

function minus(a, b){
    return a-b;
}

const p = plus;

console.log(typeof plus);
console.log(typeof p);
console.log(p(10,20));

function calculate(a, b ,func){
    return func(a, b);
}

console.log(calculate(10, 20, minus));
console.log(calculate(10, 20, plus));