"use strict";
//1- campos em classes
class User {
}
const matheus = new User();
console.log(matheus);
matheus.name = "Matheus";
// matheus.job = "programador"
console.log(matheus);
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("João", 22);
console.log(joao);
// const pedro = new NewUser("Pedro")
//3- campo readyolny 
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
fusca.name = "Fusca Turbo";
console.log(fusca);
//4- herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.numberOfGuns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 5);
console.log(destroyer);
console.log(destroyer.numberOfGuns);
// 5- Métodos
class Dwraf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey, stranger!");
    }
}
const jimmy = new Dwraf("Jimmy");
console.log(jimmy);
jimmy.greeting();
console.log(jimmy);
//6- palavra reservada this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDeatils() {
        console.log(`Caminhão do modelo ${this.model} com ${this.hp}hp de potência`);
    }
}
const fuerza = new Truck("Super", 2500);
console.log(fuerza);
fuerza.showDeatils();
// 7- getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
const mathesuBattisti = new Person("Matheus", "Battisti");
console.log(mathesuBattisti.name);
console.log(mathesuBattisti.surname);
console.log(mathesuBattisti.fullName);
//8- setters
class Coord {
    set fillX(x) {
        if (x == 0) {
            return;
        }
        else {
            this.x = x;
            console.log(" 'x inserido com sucesso!");
        }
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        else {
            this.y = y;
            console.log(" 'y inserido com sucesso");
        }
    }
    get getCoords() {
        return console.log(`Os valores são ${this.x} e ${this.y}`);
    }
}
const myCoords = new Coord;
myCoords.fillX = 15;
myCoords.fillY = 0;
console.log(myCoords);
myCoords.fillY = 302;
console.log(myCoords);
myCoords.getCoords;
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é ${this.title}`;
    }
}
const myPost = new BlogPost("Hello World");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título remanescente ficou ${this.title}`;
    }
}
const novoPost = new TestingInterface("Amanhã");
console.log(novoPost.itemTitle());
//10- override de métodos
class Base {
    someMethod() {
        console.log("alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("testando outra coisa");
    }
}
const myObject = new Nova;
myObject.someMethod();
// 11-public
class C {
    constructor() {
        this.x = 10;
    }
}
const cinstance = new C;
console.log(cinstance.x);
class D extends C {
}
const distance = new D;
console.log(distance.x);
//12- protected
class E {
    constructor() {
        this.x = 15;
    }
    protectedMethod() {
        console.log `Este método é protegido`;
    }
}
class F extends E {
    showX() {
        console.log(`x: ${this.x}`);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const finstance = new F;
// console.log(finstance.x)
finstance.showX();
// finstance.protectedMethod()
finstance.showProtectedMethod();
//13- private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        console.log(`${this.name}`);
    }
    privateMethod() {
        console.log("Este método é privado");
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass;
// console.log(pObj.name)
pObj.showName();
// class TestingPrivate extends PrivateClass{
// }
pObj.showPrivateMethod();
//14- static members
class StaticMembers {
    static StaticMethod() {
        console.log("Este método estático e não esá instanciado");
    }
}
StaticMembers.prop = "Teste static";
console.log(StaticMembers.prop); //Só conseguimos acessar o valor de props, um classe sem estar instanciada, porque atribuimos através da palavra reservada 'static' essa propriedade de 'visivilidade' ou 'legibilidade' para tal.
StaticMembers.StaticMethod(); // o mesmo se aplica a funções
//15- generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é ${this.first} `;
    }
}
const newItem = new Item("caixa", "surpresa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
const secondItem = new Item("23", false);
console.log(secondItem);
//16- parameters classes
class ParametersProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `qty:${this.qty}`;
    }
    get showPrice() {
        return `price: ${this.price}`;
    }
}
const newShort = new ParametersProperties("camisa", 12, 59.90);
console.log(newShort.name);
// console.log(newShort.qty)
console.log(newShort.showPrice);
console.log(newShort.showQty);
//17- class expression
const myClass = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
const pessoa = new myClass("Jonas", 31);
//18- Abstract class
class AbstractClassExample {
}
// const anotherObj = new AbstractClassExample
class AbstractContinue extends AbstractClassExample {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é ${this.name}`);
    }
}
const newAbstractName = new AbstractContinue("Matheus");
newAbstractName.showName();
// 19-Relação entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
