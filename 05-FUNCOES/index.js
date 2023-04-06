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
