// 1- void
function withOutReturn():void{
    console.log("Esta função não tem retorno!")
}

withOutReturn()

// 2- callbak como argumento

function  greeting(name:string){
    return `Olá, ${name}`
}

function PreGreeting(f: (name:string)=> string,  userName:string){

    console.log("Preparando a função!")

    const greet = f(userName)

    console.log(greet)

}

PreGreeting(greeting, "Matheus")