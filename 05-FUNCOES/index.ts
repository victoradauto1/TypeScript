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
