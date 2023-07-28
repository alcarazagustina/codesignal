// Ejercicio 11 TS

function solution(n: number): boolean {
    const str = n.toString();
    const len = Math.round(str.length / 2);
    let sum1 = 0, sum2 = 0;
    for (let i = 0; i < len; i++) {
        sum1 += parseInt(str[i]);
        sum2 += parseInt(str[i + len]);
    }

    return sum1 === sum2;
}