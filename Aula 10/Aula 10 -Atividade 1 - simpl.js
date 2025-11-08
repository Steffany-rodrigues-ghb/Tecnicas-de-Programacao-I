const input = require('readline-sync');

console.log('Vamos somar! A seguir,peço que digite os dois numeros da nossa soma!');

let a = Number(input.question('Digite o valor de a: '));
let b= Number(input.question('Digie o valor de b: '));

function soma(a,b){
    resultado = a + b;    
    return resultado;

} console.log(`O resultado da soma é: ${soma(a,b)}`);

console.log("Está na hora de verificar se um numero é impar ou par!Se for par,o resultado sera 'true',se for impar,o resultado sera 'false'");

let n = Number(input.question('Digite um numero:'));
function e_par(n) {
    if(n % 2 ===0){
        par = true
        return par;
    } else{
        impar = false
        return impar;
    }
} console.log(`O numero fornecido é: ${e_par(n)}!`);

console.log('Que tal descobrirmos qual o maior numero entre tres numeros? Para fazer isso,forneça tres valores!');
let c = Number(input.question('Digite o primeiro valor: '));
let d = Number(input.question('Digite o segundo valor: '));
let e = Number(input.question('Digite o terceiro valor: '));

function maxima_de_tres(c,d,e) {
let maior_numero = c;
if(d > maior_numero){
    maior_numero = d;
}if (e > maior_numero){
    maior_numero = e;
}
return maior_numero;}console.log(`O maior valor fornecido é: ${maxima_de_tres(c,d,e)}`)
console.log('Obrigada por participar! Até a proxima!');