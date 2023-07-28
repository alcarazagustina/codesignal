// Ejercicio 3 JS

// Given the string, check if it is a palindrome.

function solution(cadena) {
    const reversed = cadena.split('').reverse().join('') 
    return cadena === reversed
}
