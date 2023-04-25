
interface Exemplo{

    name: string
    number: number
}

function Nome ({name, number}:Exemplo){
    `Bem-vindo: ${name} - idade ${number} anos`
}