/*  
Escreva um programa que leia um inteiro N (1<=N<=50) e imprima os N primeiros termossda sequencia de fibonacci em uma
unica linha,separados por espaço. Use exclusivamente um laço for(sem recursao,sem while,sem funcoes prontas);
0,1,1,2,3,5,8,13,...

*/

const input = require('readline-sync')

let N = parseInt(input.question("Digite um numero: "));
let a = 0; 
let b = 1;
let c ;

let sequencia_final = " ";
 // inicialização;condição;atualização;

for (let i = 0; i < N; i++) {
// calcular o proximo numero
sequencia_final += a + " ";
c= a + b;
a = b;
b = c;

} 
console.log(sequencia_final.trim());
// 1,2,10