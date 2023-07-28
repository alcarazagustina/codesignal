// Ejercicio 7 JS

// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

function solution(secuencia){
    var count = 0;
    
    for(var i = 0; i < secuencia.length; i++){
        if (secuencia[i] <= secuencia[i-1]){
        count++;
        if(secuencia[i] <= secuencia[i-2] && secuencia[i+1] <= secuencia[i-1]){
            return false;
        }
    }
}
return count <= 1;
}