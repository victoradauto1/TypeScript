// arrays
let numbers: number[] = [1,2,3]

numbers.push(5)

console.log(numbers[2])

// outra sintaxe de array

let number: Array<number> = [2, 6, 87, 192]

number.push(304)

console.log(number)

// tipo any - aceita qualquer tipo de valor

const arr1: any = [1, "teste", "carro", 235, true, [], {"chave": "valor"}]

console.log(arr1)

// 4- parametros tipados

function soma (a:number, b:number){
    return (a+b)
}

let resul = soma(32,87)

console.log(resul)

// retorno de função
 function gretting (name: string): string{
    return `Olá, ${name}`
 }

 console.log(gretting("Victor"))

 // função anônima

 setTimeout(function(){

        const salary:number = 1000

        //console.log(parseFloat(salary))
 }, 2000)


// avançando em union types
function showUserRole (role: boolean | string){
    if(typeof role === "boolean"){
        return "USuário não aprovado"
    }

    return `A função do usuário é ${role}`

}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

// Type ALias

type ID = string | number

function showId(id: ID){
    console.log(`O id é ${id}`)
}

console.log(showId(34))


//interface

interface Point {
    a: number

    b: number

    c: number
}

function cord (obj: Point) {
    console.log(`As coordenadas são A:${obj.a}, B:${obj.b} e C:${obj.c}`)
}

const cordObj={
    a: 12,

    b: 345,

    c: 21
}

cord(cordObj)

cord( {a:23, b:346, c:43})

// interface vs type alias

interface Person{
    name: string
}

interface Person{
    age: number
}

const somePerson:Person = {name:"Victor", age: 40}

// no intrface é possível acrescentar valores, no type alias não é



