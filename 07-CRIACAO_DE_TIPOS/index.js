"use strict";
//1 - generics
function showDates(arg) {
    return `O dado é ${arg}`;
}
console.log(showDates("testando generic"));
console.log(showDates(5));
// 2- constrants in generic
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
const otherObj = { name: "carro", wheels: 4, engine: 2.0 };
console.log(showProductName(myObj));
console.log(showProductName(otherObj));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "branco" };
const pen = { name: "Caneta BIC", wheels: false, engine: false, color: "azul" };
console.log(myCar);
console.log(pen);
// 4- type paramenters
function getSomeKey(obj, key) {
    return `A chave ${key.toString()} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const MyChar = {
    name: "Mahteus",
    age: 30,
    hasDriverLicense: true
};
console.log(showCharName(MyChar, "name"));
// 6- typeof type operator
const userName = "Mahteus";
const userName2 = "João";
const myTruck = {
    km: 100000,
    kg: 5000,
    description: "Caminhão par pouca carga"
};
function showKm(km) {
    console.log(`O veículo tem a Km de de: ${km}`);
}
showKm(myTruck.km);
const newCar = {
    km: 5000,
    kg: 1000,
};
showKm(newCar.km);
const someVar = 5;
const testing = "some text";
const testing2 = "testando";
