"use strict";
// narrowing
// 1- type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar a soma");
    }
}
sum("4", "5");
sum(43.7, 6);
sum(3, "7");
// 2- checando se o valor existe
function operations(arr, operation) {
    if (operation) {
    }
    else {
        console.log("Por favor, defina uma operação");
    }
}
operations([1, 2, 3]);
// 3 - operador instace of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const paul = new SuperUser("Paul");
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name} deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(paul);
userGreeting(jhon);
// operador in 
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");
function showDogDetails(dog) {
    if ("breed" in dog) {
        console.log(`O cachorro é da raça ${dog.breed}.`);
    }
    else {
        console.log(`O cachorro é um SRD.`);
    }
}
showDogDetails(turca);
showDogDetails(bob);
