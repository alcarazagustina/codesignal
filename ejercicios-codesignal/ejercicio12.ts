// Ejercicio 12 TS

function solution(a: number[]): number[] {
    const temp = a.filter(x => x > 0).sort((a, b) => a - b).reverse();
    return a.map(x => x > 0 ? temp.pop() : -1);
}
