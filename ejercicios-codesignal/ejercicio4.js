// Ejercicio 4 JS 

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function solution(inputArray) {
    let largestProduct = inputArray[0] * inputArray[1]
    for (var i = 1; i < inputArray.length - 1; i++) {
      const actualProduct = inputArray[i] * inputArray[i + 1]
    if (actualProduct > largestProduct) {
    largestProduct = actualProduct
    }
}
    return largestProduct
}