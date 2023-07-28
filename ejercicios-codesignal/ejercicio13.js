// Ejercicio 13 JS

// Write a function that reverses characters in (possibly nested) parentheses in the input string.
// Input strings will always be well-formed with matching ()s.

function solution(inputString) {
    let x = inputString
    while(x.includes('(')){
        const endBracket = x.indexOf(')')
        const startBracket = x.lastIndexOf('(', endBracket)
        const s = x.slice(startBracket + 1, endBracket)
        const reversedS = s.split('').reverse().join('')
        x = x.slice(0, startBracket) + reversedS + x.slice(endBracket + 1)
    }
    return x
}