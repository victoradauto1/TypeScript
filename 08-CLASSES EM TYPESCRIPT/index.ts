//1- campos em classes
class User{
    name!: string
    age!: number
}

const matheus =  new User()

console.log(matheus)

matheus.name = "Matheus"
// matheus.job = "programador"

console.log(matheus)

class NewUser{
    name
    age

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }
}

const joao = new NewUser("João", 22)

console.log(joao)

// const pedro = new NewUser("Pedro")

//3- campo readyolny 

class Car{
    name
    readonly wheels = 4

    constructor (name: string){
        this.name = name
    }
}

const fusca = new Car("Fusca")

console.log(fusca)

fusca.name = "Fusca Turbo"

console.log(fusca)

//4- herança e super

class Machine{
    name

    constructor(name: string){
        this.name =name
    }
}

const trator = new Machine("Trator")

class KillerMachine extends Machine{

    numberOfGuns

    constructor(name: string, guns: number){
        super(name)
        this.numberOfGuns = guns
    }
}

const destroyer = new KillerMachine("Destroyer", 5)

console.log(destroyer)
console.log(destroyer.numberOfGuns)

// 5- Métodos

class Dwraf{
    name

    constructor (name:string){
        this.name = name
    }

    greeting(){
        console.log("Hey, stranger!")
    }
}

const jimmy = new Dwraf("Jimmy")

console.log(jimmy)

jimmy.greeting()

console.log(jimmy)

//6- palavra reservada this

class Truck{
    model
    hp

    constructor(model:string, hp: number){
        this.model = model
        this.hp = hp
    }

    showDeatils(){
        console.log(`Caminhão do modelo ${this.model} com ${this.hp}hp de potência`)
    }
}

const fuerza = new Truck("Super", 2500)

console.log(fuerza)

fuerza.showDeatils()

// 7- getters

class Person{
    name
    surname

    constructor (name: string, surname: string){
        this.name = name
        this.surname = surname
    }

    get fullName(){
        return `${this.name} ${this.surname}`
    }
}

const mathesuBattisti =  new Person("Matheus", "Battisti")

console.log(mathesuBattisti.name)
console.log(mathesuBattisti.surname)
console.log(mathesuBattisti.fullName)

//8- setters

class Coord {

    x!: number
    y!: number

    set fillX(x: number){
        if(x == 0){
            return
        } else {
            this.x = x

            console.log(" 'x inserido com sucesso!")
        }
    }

    set fillY(y: number){
        if(y === 0){
            return
        } else {
            this.y = y
            
            console.log(" 'y inserido com sucesso")
        }
    }

    get getCoords(){
        return console.log(`Os valores são ${this.x} e ${this.y}`)
    }
}

const myCoords = new Coord

myCoords.fillX = 15
myCoords.fillY = 0

console.log(myCoords)

myCoords.fillY = 302

console.log(myCoords)

myCoords.getCoords

// 9- implements

interface showTitle{
    itemTitle():string
}

class BlogPost implements showTitle{

    title

    constructor (title: string){
        this.title = title
    }

    itemTitle() {
        return `O título do post é ${this.title}`
        
    }

}

const myPost = new BlogPost("Hello World")

console.log(myPost.itemTitle())

class TestingInterface implements showTitle{
    
    title

    constructor (title: string){
        this.title = title
    }

    itemTitle() {
        return `O título remanescente ficou ${this.title}`
        
    }
}

const novoPost = new TestingInterface("Amanhã")

console.log(novoPost.itemTitle())

//10- override de métodos

class Base{
    someMethod(){
        console.log("alguma coisa")
    }
}

class Nova extends Base{
    someMethod(){
        console.log("testando outra coisa")
    }
}

const myObject = new Nova

myObject.someMethod()

// 11-public

class C {
    public x = 10
}

const cinstance = new C

console.log(cinstance.x)

class D extends C {

}

const distance = new D

console.log(distance.x)

//12- protected

class E {
    protected x =15

    protected protectedMethod(){
        console.log `Este método é protegido`
    }
}

class F extends E {

    showX (){
        console.log(`x: ${this.x}`)
    }

    showProtectedMethod(){
        this.protectedMethod()
    }
}

const finstance = new F

// console.log(finstance.x)
finstance.showX()

// finstance.protectedMethod()
finstance.showProtectedMethod()

//13- private

class PrivateClass{
    private name = "Private"

    showName(){
        console.log(`${this.name}`)
    }

    private privateMethod(){
        console.log("Este método é privado")
    }

    showPrivateMethod(){
        this.privateMethod()
    }


}

const pObj = new PrivateClass

// console.log(pObj.name)
pObj.showName()

// class TestingPrivate extends PrivateClass{
    
// }

pObj.showPrivateMethod()