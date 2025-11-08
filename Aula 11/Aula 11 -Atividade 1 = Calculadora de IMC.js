const input = require('readline-sync');

let peso = Number(input.question('Digite seu peso em kg: ')).trim().replace(',' , '.');
let altura = Number(input.question('Digite sua altura em metros: ')).trim().replace(',' , '.');

function calcular_imc(peso,altura){
    return peso / (altura * altura);
} console.log(`Seu IMC é: ${calcular_imc(peso,altura)}`);


IMC = calcular_imc(peso,altura);
if(IMC < 18.5){
        console.log('Voce esá abaixo do peso!');
    } if(IMC >= 18.5 && IMC < 24.9){
        console.log('Voce esta com o peso normal!');
    }if (IMC >= 25 && (IMC <= 29.9)){
        console.log('Voce esta com sobrepeso!');
    } if (IMC >=30){
        console.log('Voce esta com obesidade!');
    } 



