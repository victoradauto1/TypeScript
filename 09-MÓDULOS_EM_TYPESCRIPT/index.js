"use strict";
//1- importação de arquivos
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greet_js_1 = __importDefault(require("./greet.js"));
(0, greet_js_1.default)();
//2- import de variável
const variable_js_1 = require("./variable.js");
console.log(variable_js_1.x);
//3- multiplas importações
const multiple_js_1 = require("./multiple.js");
console.log((0, multiple_js_1.showSum)(34, 67));
console.log(multiple_js_1.a, multiple_js_1.b);
// 4-alias
const change_js_1 = require("./change.js");
console.log(change_js_1.someName);
(0, change_js_1.SomandoDoisNumeros)(34, 45);
// 5- importando TUDO de um arquivo
const numbers = __importStar(require("./numbers"));
console.log(numbers);
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new User("João", 25);
console.log(joao);
