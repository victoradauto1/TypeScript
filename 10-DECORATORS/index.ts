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

// o resultado esperado é adicionar 5 casas ao valor numérico

function formatNUmber(){
    return function(target: object, propertyKey: string){
        
        let value: string

        const getter = function(){
            return value
        }

        const setter = function(newVal: string) {
            value = newVal.padStart(5, "0")
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        })
    } 
}
class ID{
    @formatNUmber()
    id

    constructor (id: string){
        this.id = id
    }
}

const newItem = new ID("1")

console.log(newItem)

//7- exemploe real com class decorator

function createDate(created: Function){
    created.prototype.createdAt = new Date()
}

@createDate
class Book{
    id
    createdAt?: Date

    constructor(id: number){
        this.id = id

    }
}

@createDate
class Pen{
    id
    createdAt?: Date

    constructor(id: number){
        this.id = id

    }
}

const newBook = new Book(12)
const bluePen = new Pen(55)

console.log(newBook)
console.log(bluePen)
console.log(bluePen.createdAt)

//8- exemplo real de metodo decorator

function checkIfPosted(){

    return function (
        target: Object, 
        key: string | Symbol, 
        descriptor: PropertyDescriptor
        ){
            const childFunction = descriptor.value
            console.log(childFunction)
            descriptor.value =  function(...arg: any[]){
                if(arg[1] ===true){
                    console.log("Usuário já postou")
                    return null
                }else{ 
                    return childFunction.apply(this, arg)
                }
            }

            return descriptor
        }
}
class Post{
    alreadyPosted = false

    @checkIfPosted()
    post( content: string, alreadyPosted: boolean ){
        this.alreadyPosted = true
        console.log(`Post do usuário ${content}`)
    }

}

const novoPost = new Post()

novoPost.post("Meu primeiro Post!", novoPost.alreadyPosted)

novoPost.post("Meu segundo Post!", novoPost.alreadyPosted)

//9-exemplo real com property decorator

function max (limit: number){

    return function(target: Object, propertyKey: string ){
        
        let value: string

        const getter = function(){
            return value
        }

        const setter = function(newVal: string){
            if(newVal.length > limit){
                console.log(`ATENÇÃO! O valor deve ter no máximo ${limit} caracteres.`)
                return
            } else{
                value = newVal
            }
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })

    }
}


class Admin{
    @max(8)
    username

  
    constructor(username: string){
        this.username = username

    }
}

const victor  = new Admin("Victor")

const matheusBatisti = new Admin("MatheusBatisiti")
