//1- importação de arquivos

import importGreet from "./greet.js";

importGreet()

//2- import de variável

import { x } from './variable.js'

console.log(x)

//3- multiplas importações

import { a, b, showSum} from './multiple.js'

console.log(showSum(34, 67))
console.log(a, b)

// 4-alias

import { someName as name, SomandoDoisNumeros as soma } from "./change.js"

console.log(name)
soma(34, 45)

// 5- importando TUDO de um arquivo

import * as numbers from "./numbers"

console.log(numbers)

// 6-importando tipos
import { Human} from "./mytype.js"

class User implements Human {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}

const joao = new User ("João", 25)

console.log(joao)