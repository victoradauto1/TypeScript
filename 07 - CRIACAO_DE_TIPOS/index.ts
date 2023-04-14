//1 - generics

function showDates<T>(arg: T):string{
    return `O dado é ${arg}`
}

console.log(showDates("testando generic"))
console.log(showDates(5))

// 2- constrants in generic

function showProductName<T extends {name:string}>(obj:T){
    return `O nome do produto é ${obj.name}`
}

const myObj = {name: "Porta", cor: "Branca"}
const otherObj = {name: "carro", wheels: 4, engine: 2.0}

console.log(showProductName(myObj))
console.log(showProductName(otherObj))

// 3- generics com interface

interface MyObject <T, U, Q>{
    name:string,
    wheels: T
    engine: U
    color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = {name: "Fusca", wheels: 4, engine: 1.0, color: "branco"}
const pen: Pen = {name: "Caneta BIC", wheels: false, engine: false, color: "azul"}

console.log(myCar)
console.log(pen)

// 4- type paramenters

function getSomeKey<T, K extends keyof T>(obj:T, key:K){
    return `A chave ${key.toString()} está presente no objeto e tem o valor de ${obj[key]}`
}

const server ={
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))

// 5- keyof type operators

type Chacacter = {name: string, age: number, hasDriverLicense: boolean}

type C = keyof Chacacter

function showCharName (obj: Chacacter, name: C): string{
    return `${obj[name]}`
}

const MyChar: Chacacter = {
    name: "Mahteus",
    age: 30,
    hasDriverLicense: true
}

console.log(showCharName(MyChar, "name"))

// 6- typeof type operator

const userName: string ="Mahteus"

const userName2: typeof userName = "João"

