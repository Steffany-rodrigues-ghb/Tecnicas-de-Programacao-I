const input = require("readline-sync");

let n1 = Number(input.question('Digite o valor da nota 1: '));
let n2 = Number(input.question('Digite o valor da nota 2: '));
let n3 = Number(input.question('Digite o valor da nota 3: '));
function calcular_media(n1,n2,n3) {
const soma = n1 + n2+ n3;
const media = soma / 3;
return media;
}
const resultado = calcular_media(n1,n2,n3);
console.log(`A media é : ${resultado}`);


function soma (a,b) {
    const resultado = a + b;
    return resultado;
}
const r1 = soma(3,4);
const r2 = soma(10,5);
console.log(`Resultados: ${r1} e ${r2}`);