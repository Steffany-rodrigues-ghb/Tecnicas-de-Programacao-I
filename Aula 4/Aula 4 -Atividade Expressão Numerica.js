

const input = require('readline-sync')
let a = input.question('digite um número')
let b = input.question('digite um número')
let c = input.question('digite um número')


const Δ = b**2 - 4 *a*c;


if(a === 0 ) { //aqui tinha usado atribuição ao inves de comparação,por isso nao estava rodando como deveria,estava assim : (a = 0 )
    console.log("Não é equação de segundo grau!")}

else if (Δ < 0) {
    console.log("Não existem raízes reais!")}

else if  (Δ === 0) { //aqui tambem tinha usado atribuição ao inves de comparação,estava assim : (Δ = 0) 
    let x = -b / (2 *a);
    console.log(`Existe uma raiz real : x = ${x}`);}

else (Δ > 0) ;{ 
let x1 = (-b + Math.sqrt(Δ)) / (2*a);
let x2 = (-b - Math.sqrt(Δ)) / (2*a);
    console.log(`Existem duas raízes reais: x1 = ${x1}, x2 = ${x2}`)}

console.log(Δ);


