// Ejercicio 13 TS

function solution(inputString: string): string {
    let match = null
    let currentString = inputString
    while ( currentString.search(/\(+/)!=-1){ //expresion regular
        console.log('match')
        currentString = currentString.replace(/\(\w*\)/, (match)=>match.slice(1, -1).split("").reverse().join(""))
    }
    return currentString
}
