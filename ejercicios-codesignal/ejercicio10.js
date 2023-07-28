// Ejercicio 10 JS

// Given two strings, find the number of common characters between them.

function solution(s1, s2) {
    let counter = 0
    let arrayS1 = s1.split('')
    let y = s2
    while (arrayS1.length){
        const x = arrayS1.pop();
        if(y.includes(x)){
            counter++;
            y = y.replace(x,'');
        }
    }
    return counter
}
