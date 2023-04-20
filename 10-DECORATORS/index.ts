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