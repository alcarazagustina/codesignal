// Ejercicio 14 JS

// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

function solution(a) {
    let sum1=0;
    let sum2=0;
    let b=[];
    for(let i=0;i<a.length;i+=2){
        sum1+=a[i]
    }
    for(let i=1;i<a.length;i+=2){
        sum2+=a[i]
    }
    b.push(sum1);
    b.push(sum2);
    return b

}