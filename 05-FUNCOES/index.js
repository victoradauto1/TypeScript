"use strict";
// 1- void
function withOutReturn() {
    console.log("Esta função não tem retorno!");
}
withOutReturn();
// 2- callbak como argumento
function greeting(name) {
    return `Olá, ${name}`;
}
function PreGreeting(f, userName) {
    console.log("Preparando a função!");
    const greet = f(userName);
    console.log(greet);
}
PreGreeting(greeting, "Matheus");
// 3 - generic functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3, 4, 5]));
console.log(firstElement(["A", "B", "C", "D"]));
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = mergeObjects({ "name": "Matheus" }, { "age": 30, job: "Programmer" });
console.log(newObject);
// 4- contraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
biggestNumber(2, 3);
biggestNumber(459, 34);
console.log(biggestNumber(2, 3));
console.log(biggestNumber(459, 34));
// 5- especificar tipos de argumentos
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([23, 657, "bola"], [true, 456, "tapete"]));
console.log(mergeArrays([12, 13, 14], ["vida", "avião"]));
// 6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá, ${greet} ${name}`;
    }
    else {
        return `Olá, ${name}`;
    }
}
console.log(modernGreeting("Victor", "Sr"));
console.log(modernGreeting("João"));
// 7- parâmetros default
function somaDefault(num1, num2 = 10) {
    return num1 + num2;
}
console.log(somaDefault(10));
console.log(somaDefault(30, 80));
// 8- tipo unknow
function doSomething(x) {
    console.log(x);
}
doSomething("1");
// 9- never
function shoErrorMessage(msg) {
    throw new Error(msg);
}
// shoErrorMessage("Algum erro")
// 10- rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(23, 76, 87, 34));
// 11- destructuring com parâmetro
function showProductsDetails({ name, price }) {
    return `O nome do produto é ${name} e o seu valor é R$ ${price}`;
}
const product = { name: "casaco", price: 120.00 };
console.log(showProductsDetails(product));
