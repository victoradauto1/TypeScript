// 1- void
function withOutReturn():void{
    console.log("Esta função não tem retorno!")
}

withOutReturn()

// 2- callbak como argumento

function  greeting(name:string){
    return `Olá, ${name}`
}

function PreGreeting(f: (name:string)=> string,  userName:string){

    console.log("Preparando a função!")

    const greet = f(userName)

    console.log(greet)

}

PreGreeting(greeting, "Matheus")

// 3 - generic functions

function firstElement<T>(arr: T[]): T{
    return arr[0]
}

console.log(firstElement([1, 2, 3, 4, 5]))
console.log(firstElement(["A", "B", "C", "D"]))

function mergeObjects <U, T> (obj1:U, obj2: T) {
    return {...obj1, ...obj2} 
    
}

const newObject = mergeObjects({"name":"Matheus"}, {"age": 30, job: "Programmer"})
console.log(newObject)

// 4- contraints

function biggestNumber < T extends number | string> (a: T, b: T ): T {
    
    let biggest: T

    if(+a > +b){
        biggest = a
    } else {
        biggest = b
    }

    return biggest
}

biggestNumber(2, 3)
biggestNumber(459, 34)

console.log(biggestNumber(2, 3))
console.log(biggestNumber(459, 34))

// 5- especificar tipos de argumentos

function mergeArrays <T> (arr1: T[], arr2: T[]){
    return arr1.concat(arr2)
}

console.log(mergeArrays([23,657, "bola"], [true, 456, "tapete"]))
console.log(mergeArrays<number | string>([12,13, 14], ["vida", "avião"]))

// 6 - parametros opcionais

function modernGreeting(name:string, greet?:string){
    if(greet){
        return `Olá, ${greet} ${name}`
    } else{
        return `Olá, ${name}`
    }

}

console.log(modernGreeting("Victor", "Sr"))
console.log(modernGreeting("João"))

// 7- parâmetros default

function somaDefault(num1: number, num2 = 10){
    return num1 + num2
}

console.log(somaDefault(10))
console.log(somaDefault(30, 80))

// 8- tipo unknow

function doSomething(x: unknown){
    console.log(x)
}

doSomething("1")

// 9- never

function shoErrorMessage (msg: string): never{
    throw new Error(msg)

}

// shoErrorMessage("Algum erro")

// 10- rest operator

function sumAll(...n: number[]){
    return n.reduce((number, sum)=> sum + number)
}

console.log(sumAll(23, 76, 87, 34))

// 11- destructuring com parâmetro

function showProductsDetails ({name, price}:{name:string, price:number}):string{
    return `O nome do produto é ${name} e o seu valor é R$ ${price}`
}

const product = {name: "casaco", price: 120.00}


console.log(showProductsDetails(product))