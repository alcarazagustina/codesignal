// Ejercicio 9 JS

// Given an array of strings, return another array containing all of its longest strings.

function solution(inputArray) {
    let length = 0
    for (const val of inputArray){
        length = Math.max(length, val.length)
    }
    return inputArray.filter(element => element.length === length)
}
