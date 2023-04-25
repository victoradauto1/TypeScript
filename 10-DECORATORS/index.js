"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//1- exemplo de decorators
function myDecorators() {
    console.log("iniciando decorators");
    return function (target, propertyKey, descriptor) {
        console.log("Executando Decorator");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class MyClass {
    testing() {
        console.log("terminando execução do método");
    }
}
__decorate([
    myDecorators()
], MyClass.prototype, "testing", null);
const myObj = new MyClass();
myObj.testing();
//2-multiplos decorators
function a() {
    return function (target, propertyKey, descriptor) {
        console.log("executou a");
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log("executou b");
    };
}
class MultipleDecorators {
    testing() {
        console.log("terminando execução do método");
    }
}
__decorate([
    a(),
    b()
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
//3-class decorator
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name === "User") {
        console.log("Criando usuário");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const matheus = new User("Matheus");
console.log(matheus);
//4- method decorator
function enumerable(value) {
    return function (taget, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquina é ${this.name}`;
    }
}
__decorate([
    enumerable(true)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator.showName());
//5 - acessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome o monstro: ${this.name}`;
    }
    get showAge() {
        return `A idade do monstro é ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(true)
], Monster.prototype, "showAge", null);
const charmander = new Monster("Charmander", 10);
console.log(charmander);
//6- property decorators
// o resultado esperado é adicionar 5 casas ao valor numérico
function formatNUmber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNUmber()
], ID.prototype, "id", void 0);
const newItem = new ID("1");
console.log(newItem);
//7- exemploe real com class decorator
function createDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createDate
], Pen);
const newBook = new Book(12);
const bluePen = new Pen(55);
console.log(newBook);
console.log(bluePen);
console.log(bluePen.createdAt);
//8- exemplo real de metodo decorator
function checkIfPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...arg) {
            if (arg[1] === true) {
                console.log("Usuário já postou");
                return null;
            }
            else {
                return childFunction.apply(this, arg);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário ${content}`);
    }
}
__decorate([
    checkIfPosted()
], Post.prototype, "post", null);
const novoPost = new Post();
novoPost.post("Meu primeiro Post!", novoPost.alreadyPosted);
novoPost.post("Meu segundo Post!", novoPost.alreadyPosted);
//9-exemplo real com property decorator
function max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`ATENÇÃO! O valor deve ter no máximo ${limit} caracteres.`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    max(8)
], Admin.prototype, "username", void 0);
const victor = new Admin("Victor");
const matheusBatisti = new Admin("MatheusBatisiti");
