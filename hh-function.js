function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function mutiply(a,b){
    return a*b;
}

function devide(a,b){
    return a/b;
}

const added = add(5,5);
const subtracted = subtract(5,5);
const mutiplied = mutiply(5,5);
const devided = devide(5,5);

const arrowAdd = (a,b) => a+b;
const arrowSubtract = (a,b) => a-b;
const arrowMutiply = (a,b) => a*b;
const arrowDevide = (a,b) => a/b;

const calculator = {
    add : arrowAdd,
    subtract : arrowSubtract,
    mutiply : arrowMutiply,
    devide : arrowDevide
}

resultAdd = calculator.add(10,20);
resultDevide = calculator.devide(3000,10);

const findMinNumber = (a,b)=>{
    return Math.min(a,b);
}

console.log(findMinNumber(10,20))