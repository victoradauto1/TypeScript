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
