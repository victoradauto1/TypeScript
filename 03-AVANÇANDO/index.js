"use strict";
// arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// outra sintaxe de array
let number = [2, 6, 87, 192];
number.push(304);
console.log(number);
// tipo any - aceita qualquer tipo de valor
const arr1 = [1, "teste", "carro", 235, true, [], { "chave": "valor" }];
console.log(arr1);
// 4- parametros tipados
function soma(a, b) {
    return (a + b);
}
let resul = soma(32, 87);
console.log(resul);
// retorno de função
function gretting(name) {
    return `Olá, ${name}`;
}
console.log(gretting("Victor"));
// função anônima
setTimeout(function () {
    const salary = 1000;
    //console.log(parseFloat(salary))
}, 2000);
// avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "USuário não aprovado";
    }
    return `A função do usuário é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O id é ${id}`);
}
console.log(showId(34));
function cord(obj) {
    console.log(`As coordenadas são A:${obj.a}, B:${obj.b} e C:${obj.c}`);
}
const cordObj = {
    a: 12,
    b: 345,
    c: 21
};
cord(cordObj);
cord({ a: 23, b: 346, c: 43 });
const somePerson = { name: "Victor", age: 40 };
// no intrface é possível acrescentar valores, no type alias não é
