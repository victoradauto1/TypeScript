"use strict";
// 1 - tipo de objeto para função com interface
function showProductDetails(produto) {
    console.log(`O nome do produto é ${produto.name}, seu preço é ${produto.price}`);
    if (produto.isAvailable) {
        console.log(`O produto se encontra nos estoques da loja`);
    }
    else {
        console.log(`Produto em falta`);
    }
}
const bermuda = { name: "bermuda", price: 90.00, isAvailable: true };
const luvas = { name: "luvas", price: 30.00, isAvailable: false };
showProductDetails(bermuda);
showProductDetails(luvas);
function showUserDetails(usu) {
    console.log(`O usuário tem o email ${usu.email}`);
    usu.role && console.log(`a função do usuário é ${usu.role}`);
}
const admin = { email: "admin@usu.com", role: "administrador" };
const simplesUsu = { email: "joao@email.com" };
showUserDetails(admin);
showUserDetails(simplesUsu);
const fusca = { brand: "VolksWagen", wheels: 4 };
console.log(fusca);
// fusca.wheels = 5
fusca.brand = "meredes";
let coords = { x: 10 };
coords.y = 15;
console.log(coords);
const matheus = { name: 'Matheus', age: 31 };
const goku = { name: "Goku", age: 50, superpowers: ["KameKameha", "Genki Dama"] };
console.log(goku);
console.log(goku.superpowers[1]);
