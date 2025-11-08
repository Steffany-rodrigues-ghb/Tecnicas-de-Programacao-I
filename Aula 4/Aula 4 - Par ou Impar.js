//PAR OU IMPAR
const input = require('readline-sync');

//CAPTURA E CONVERTE PARA NUMERO
const n = Number(input.question('Digite um numero : '));

//VALIDAÇÃO
if(Number.isNaN(n)) {
    console.log('Por favor,digite um numero valido!');
} else {
    const resultado = (n % 2 === 0) ? 'PAR' : 'IMPAR';
    console.log (`${n} é ${resultado}`);
}10
