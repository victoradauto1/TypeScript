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
