const input = require('readline-sync')
/*
1.Lê: nome (texto), idade (inteiro ≥0), 3 notas (0..10), frequência (0..100) e cupom (texto, opcional) OK
2.Valida todos os valores (faixa + não vazio). Se inválido → mostrar mensagem e encerrar.
3. Calcula a média (1 casa) e define a situação:OK
○ Aprovado: média ≥ 7 e frequência ≥ 75 OK
○ Recuperação: 5 ≤ média < 7 e frequência ≥ 75 OK
○ Reprovado: demais casos OK
4. Calcula a mensalidade (base R$ 300,00) com descontos que somam:
○ Mérito: 10% se média ≥ 8.0 OK
○ Jovem: 5% se idade ≤ 21 OK
○ Cupom ALUNO5: 5% → Total = base − descontos (mínimo 0) OK.
5. Imprime o recibo no formato abaixo. OK
*/



//Nome // falta validar nome
let nome = String(input.question('Digite seu nome: ')).trim(); // aqui a string faz com que a resposta seja em texto
if (!nome) {
    console.log('nome invalido')
}
 else {
 //Idade
let idade = parseInt(input.question('Digite sua idade: '));//aqui o  parse int vai converter string em numero,pois o readline-sync sempre da em string(slideaula4)
if(idade<0){ // validando a idade
    console.log('idade é invalida')
}

//Notas
let nota_1 = parseFloat((input.question('Digite sua primeira nota: ')))
if(nota_1<0 || nota_1>10)
    console.log('nota incorreta')
else {
let nota_2 = parseFloat((input.question('Digite sua segunda nota: ' )))
if(nota_2<0 || nota_2>10){
    console.log('nota incorreta') 
    } else{
let nota_3 =parseFloat((input.question('Digite sua terceira nota: ')))
if(nota_3<0 || nota_3>10){
    console.log('nota incorreta')
} else {
let media = (nota_1 + nota_2 + nota_3) / 3  ;
console.log(`Sua media é : ${media}`);

//Frequencia
let frequencia = parseFloat(input.question('Qual a sua frequencia? '));
let resultado_da_frequencia = frequencia;
if(frequencia<=0 || frequencia>100){
    console.log('frequencia errada')
}
else { // se a frequencia estiver correta,o codigo continua no else aq
if (frequencia>= 75){
    console.log( resultado_da_frequencia = 'Frequencia aprovada!')
    console.log('Vamos calcular sua media!')
}else {
    console.log('Frequencia abaixo de 75%,reprovada!')
    
}  
//Media
 if (media>=7 && frequencia>=75){
    console.log(`Sua media é ${media} , e sua frequencia é ${frequencia}%.Voce esta aprovado(a)!`);} // nao usar ||(ou) ao inves de && (e),pois se usar (ou),ele vai resultar numa condição sempre verdadeira e ira dar erro pois vai aparecer recuperação e reprovado,usar (e) que vai dar bom
    else if (media >=5 && media <7 && frequencia>=75) {
        console.log(`Sua media é ${media}, e sua frequencia é ${frequencia}%. Voce esta de recuperação!`)
    }
 if(media<5 || frequencia<75){ // aqui ao inves de colocar || (ou),eu coloquei && e estava dando erro, pois estava aparecendo reprovado apenas dr os dois forem ruins,mas deveria reprovar se qualquer um fosse
console.log(`Sua media é : ${media},esta abaixo de 5 e voce nao pode ir para recuperação.Sua frequencia é ${frequencia}% e está abaixo da frequencia minima.
Voce esta reprovado(a)!`)
}

// Pedir se tem cupom   //Cupom ALUNO5: 5% → Total = base − descontos (mínimo 0).
const cupom = 'ALUNO5';
let possui_cupom = input.question('Voce possui cupom?');
let diga_o_cupom = input.question('Digite seu cupom: ');
 if (possui_cupom.toLowerCase() === "sim") //estava dando erro pois nao coloquei toLowecase e nem ===,tinha atribuido ao inves de comparar
 if (diga_o_cupom .toUpperCase() === cupom ){
    console.log('Cupom aceito')
} else if (diga_o_cupom.toUpperCase() != cupom) { // se a resposta for diferente(!=) de "aluno5",o cupom nao é o cupom,entao é invalido
     console.log('O cupom digitado é invalido!')
}  

//declarar a mensalidade e desconto por merito //Mérito: 10% se média ≥ 8.0
const mensalidade = 300;
let desconto = 0;
if(media >=8){
desconto += mensalidade * 0.10;
} 
//colocar o desconto por idade //Jovem: 5% se idade ≤ 21
if(idade<=21){
    desconto += mensalidade * 0.05
}
let desconto_total = desconto;

//desconto cupom
if(diga_o_cupom.toUpperCase() === cupom){
    desconto += mensalidade * 0.05 
}

//juntando mensalidade e desconto
mensalidade_final = mensalidade - desconto;
let total_a_pagar = mensalidade - desconto_total;

//situação (aprovado ou nao)
let situação='';
if (media >= 7 && frequencia >= 75) {
    situação='Aprovado'
} else if (media >=5 && frequencia >= 75) {
    situação='Recuperação'
} else {
    situação = 'Reprovado'
}

console.log(`Aluno : ${nome}`);
console.log(`Idade : ${idade}`);
console.log(`Media: ${media.toFixed(1)} | Frequencia: ${frequencia} | Situacao: ${situação}`)
console.log(`Mensalidade base: R$ ${mensalidade.toFixed(2)}`);
console.log(`Descontos: R$ ${desconto_total.toFixed(2)}`);
console.log(`Total a pagar: R$ ${total_a_pagar.toFixed(2)} `)
} }} }}

