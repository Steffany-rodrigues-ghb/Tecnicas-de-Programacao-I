
const input = require('readline-sync');
/*
Implementar 3 funções e testar com console.log:
soma(a,b) retorna a soma
e_par(n) true se for par,senao false
max3(a,b,c) retorna o maior entre 3 numeros
*/ 
/*  
exemplo de saída: 
soma(7,5) = 12
e_par(10) = true
max3(7,2,9) = 9
*/
console.log('Vamos somar! A seguir,peço que digite os dois numeros da nossa soma!');
let a = Number(input.question('Digite o valor de a: '));
console.log(`O primeiro numero fornecido é:${a}!`);
let b= Number(input.question('Digie o valor de b: '));
console.log(`O segundo numero fornecido é:${b}!`);
console.log('Vamos realizar a soma dos dois numeros fornecidos!');
console.log('Aguarde um pouco!');
console.log('.')
console.log('..')
console.log('...')
console.log('....')
console.log('......')
console.log('.......')
console.log('........')
console.log('.........')
console.log('..........')

function soma(a,b){
    resultado = a + b;    
    return resultado;

} console.log(`O resultado da soma é: ${soma(a,b)}`);

console.log("Está na hora de verificar se um numero é impar ou par!Se for par,o resultado sera 'true',se for impar,o resultado sera 'false'");

console.log('Aguarde um momento,estamos carregando o sistema');
console.log('.')
console.log('..')
console.log('...')
console.log('....')
console.log('......')
console.log('.......')
console.log('........')
console.log('.........')
console.log('..........')

console.log('Pronto! Peço que forneça um numero para fazermos a verificação!');
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
let d = Number(input.question('Digite o segundo valor:'));
let e = Number(input.question('Digite o terceiro valor: '));

function maxima_de_tres(c,d,e) {
let maior_numero = c;
if(d > maior_numero){
    maior_numero = d;
}if (e > maior_numero){
    maior_numero = e;
}
return maior_numero;}
 console.log('Aguarde um momento,estamos processando seu resultado!');
 console.log('.')
console.log('..')
console.log('...')
console.log('....')
console.log('......')
console.log('.......')
console.log('........')
console.log('.........')
console.log('..........')

console.log(`O maior valor fornecido é: ${maxima_de_tres(c,d,e)}`)

console.log('Agradecemos por usar nosso sistema! Volte sempre!');