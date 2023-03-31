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


// tipos de obejto

