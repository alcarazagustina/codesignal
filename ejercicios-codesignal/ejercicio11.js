// Ejercicio 11 JS

// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.

function solution(n) {
    const s = n.toString()
    const total1 = s.slice(0,s.length/2).split('').reduce((a,b)=>Number(a)+Number(b))
    const total2 = s.slice(s.length/2,s.length).split('').reduce((a,b)=>Number(a)+Number(b))
    return total1 === total2
}
