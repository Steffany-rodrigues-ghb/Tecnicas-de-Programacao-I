const input = require('readline-sync')
/*
1.Lê: nome (texto), idade (inteiro ≥0), 3 notas (0..10), frequência (0..100) e cupom (texto, opcional)
2.Valida todos os valores (faixa + não vazio). Se inválido → mostrar mensagem e encerrar.
*/
/*Nome
let nome = input.question('Digite seu nome: ');
//Idade
Number=let = idade = input.question('Digite sua idade: ')*/

//Frequencia
let frequencia = parseFloat(input.question('Qual a sua frequencia? '));
let resultado_da_frequencia = frequencia;
if (frequencia>= 75){
    console.log( resultado_da_frequencia = 'Frequencia aprovada!')
    console.log('Vamos calcular sua media!')
}if(frequencia<75) {
    console.log('Frequencia abaixo de 75%,reprovada!')
    
}  

//Calcular a media
let nota_1 = parseFloat((input.question('Digite sua primeira nota: ')));
let nota_2 = parseFloat((input.question('Digite sua segunda nota:' )));
let nota_3 =parseFloat((input.question('Digite sua terceira nota: ')));
let = media = (nota_1 + nota_2 + nota_3) / 3 
console.log(media);
 if (media>=7) + ( frequencia>=75); {
    console.log(`Sua media é ${media} , e sua frequencia é ${frequencia}%.Voce esta aprovado(a)!`);
} 

 if(5<=media );(media<7) + (frequencia>=75); {
    console.log(`Sua media é ${media} , e sua frequencia é ${frequencia}%. Voce esta de recuperação!`);
}






(media<=5 )(media<7) + (frequencia>=75);{
    console.log(`Sua media é ${media} , e sua frequencia é ${frequencia}%. Voce esta de recuperação!`);
}
/*Cupom
let = cupom = 'alunofema';
let possui_cupom = input.question('Voce possui cupom?');
if (possui_cupom = "sim") {
    let diga_o_cupom = input.question('Digite seu cupom: ') 
}
if(diga_o_cupom = cupom) {
    console.log('Cupom aceito')
}

//Calculo da mensalidade*/







