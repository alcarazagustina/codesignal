// Ejercicio 14 TS

function solution(a: number[]): number[] {
    return [a.filter((value, index) => value == 0 || index % 2 == 0).concat([0]).reduce((a,b) => a+b),
            a.filter((value, index) => value == 1 || index % 2 == 1).concat([0]).reduce((a,b) => a+b)];
}