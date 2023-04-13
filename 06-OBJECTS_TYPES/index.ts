// 1 - tipo de objeto para função com interface

interface Product {
    name: string
    price: number
    isAvailable: boolean
}


function  showProductDetails(produto: Product){
    console.log(`O nome do produto é ${produto.name}, seu preço é ${produto.price}`)
    if (produto.isAvailable){
        console.log(`O produto se encontra nos estoques da loja`)
    } else{
        console.log(`Produto em falta`)
    }

}

const bermuda:Product = {name: "bermuda", price: 90.00, isAvailable:true}
const luvas:Product = {name: "luvas", price: 30.00, isAvailable:false}
showProductDetails(bermuda)
showProductDetails(luvas)

// 2- propriedades opcionais com interface

interface User {
    email: string,
    role?: string,
}

function showUserDetails(usu: User){
    console.log(`O usuário tem o email ${usu.email}`)
    usu.role && console.log(`a função do usuário é ${usu.role}`)
}

const admin:User = {email: "admin@usu.com", role: "administrador"}

const simplesUsu: User = {email: "joao@email.com"}

showUserDetails(admin)
showUserDetails(simplesUsu)

//3- propriedades readonly

interface Car{
    brand: string,
    readonly wheels: number

}

const fusca: Car = { brand: "VolksWagen", wheels: 4}

console.log(fusca)

// fusca.wheels = 5
fusca.brand = "meredes"

// 4- index signature

interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {x:10}

coords.y = 15

console.log(coords)

// 5- Extending Types (herança)

interface Human{
    name: string
    age: number
}

interface SuperHuman extends Human{
    superpowers: string[]

}

const matheus:Human = {name: 'Matheus', age: 31}
const goku: SuperHuman = {name: "Goku", age:50, superpowers:["KameKameha", "Genki Dama"]}

console.log(goku)
console.log(goku.superpowers[1])

// 6 - intersection tyoes

interface Character {
    name:string
}

interface Gun {
    type:string
    calibre:number
}

type humanWithGun = Character & Gun

const arnold:humanWithGun = {
    name: "Arnold",
    type:"Shotgun",
    calibre: 12
}

console.log(arnold)
console.log(arnold.type)

//7- readyolny array

let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"]

// myArray[3] = "Mamão"

console.log(myArray)

myArray.forEach((item)=>{
    console.log("fruta:" + item)
})

myArray = myArray.map((set)=>{
    return `Fruta: ${set}`
})

console.log(myArray)

//8- tuplas

type fiveNumbers = [ number, number, number, number, number]


const myNumber: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumber2: fiveNumbers = [1,2,3 , 4 , 5, 6, 7]

type nameAndAge = [string, number]

const anotherUser: nameAndAge =  ["Matheus", 30]

console.log(anotherUser[1])

anotherUser[0]= "João"

console.log(anotherUser)

// 9- tuplas com readyolny

function showNumbers (numbers: readonly [number, number]){
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([56, 57])