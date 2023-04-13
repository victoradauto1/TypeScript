//1 - generics

function showDates<T>(arg: T):string{
    return `O dado é ${arg}`
}

console.log(showDates("testando generic"))
console.log(showDates(5))
