function printMessage(message){
    console.log(message);
}

const printWelcome = function(){
    console.log("welcome");
}

printMessage("type");
printWelcome();

console.log(typeof printMessage);
console.log(typeof printWelcome);

const pm = printMessage;

pm('good morning');
console.log(typeof pm);