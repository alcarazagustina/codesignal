// Ejercicio 10 TS

function solution(s1: string, s2: string): number {
    const s1Arr: string[] = s1.split("");
    const s2Arr: string[] = s2.split("");
    s1Arr.map(el => {
        const index = s2Arr.indexOf(el);
        if (index > -1) s2Arr.splice(index, 1)
    });
    console.log(s2Arr);
    return s2.length - s2Arr.length
}

