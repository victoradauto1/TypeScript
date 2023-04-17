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