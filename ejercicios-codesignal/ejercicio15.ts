// Ejercicio 15 TS

function solution(picture) {
    var outside = "**"
    picture[0].split('').forEach(p => outside += '*');
    
    var result = [outside];
    picture.forEach(p => result.push(`*${p}*`));
    result.push(outside);
    
    return result;
}