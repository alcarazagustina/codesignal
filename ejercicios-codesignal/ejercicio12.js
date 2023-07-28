// Ejercicio 12 JS

// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

function solution(a) {
    const sortedPeople = a.filter(element => element != -1).sort((a,b) => a-b)
    return a.map(value => (value === -1) ? -1 : sortedPeople.shift() )
}