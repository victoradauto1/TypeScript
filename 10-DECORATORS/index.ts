//1- exemplo de decorators
function myDecorators(){
    console.log("iniciando decorators")

    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        console.log("Executando Decorator")
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)        
    }
}

class MyClass{

    @myDecorators()
    testing(){
        console.log("terminando execução do método")
    }
}

const myObj = new MyClass()

myObj.testing()

//2-multiplos decorators

function a(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        console.log("executou a")
    }
}
function b(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        console.log("executou b")
    }
}
class MultipleDecorators {
    
    @a()
    @b()
    testing(){
        console.log("terminando execução do método")
    }
}

const multiple = new MultipleDecorators()
multiple.testing()

//3-class decorator

function classDec(constructor: Function){
    console.log(constructor)
    if(constructor.name === "User"){
        console.log("Criando usuário")
    }
}

@classDec
class User{
    name

    constructor ( name: string ){
        this.name = name
    }
}

const matheus = new User("Matheus")

console.log(matheus)

//4- method decorator

function enumerable(value: boolean){
    return function(
        taget: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){ descriptor.enumerable = value
}}
class Machine{
    name

    constructor(name: string){
        this.name = name
    }

    @enumerable(true)

    showName(){
        console.log(this)
        return`O nome da máquina é ${this.name}`
    }
}

const trator = new Machine ("Trator")

console.log(trator.showName())


//5 - acessor decorator


class Monster{
    name?
    age?

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    @enumerable(true)
    get showName(){
        return `Nome o monstro: ${this.name}`
    }

    @enumerable(true)
    get showAge(){
        return `A idade do monstro é ${this.age}`
    }
}

const charmander = new Monster("Charmander", 10)

console.log(charmander)

//6- property decorators

function formatNUmber(){
    return function(target: object, propertyKey: string){
        
        let value: string

        const getter = function(){
            return value
        }

        const setter = function(newVal: string) {
            value = newVal.padStart(5, "0")
        }
    } 
}
class ID{
    id

    constructor (id: string){
        this.id = id
    }
}

const newItem = new ID("1")

console.log(newItem)