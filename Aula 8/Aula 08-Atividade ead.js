//MULTILOOP COM UM UNICO NUMERO
const input = require('readline-sync'); 

const N =Number(input.question('Digite o valor de N: ')); 
if (N>=1) {
console.log(`Voce digitou ${N}`)

let soma_dos_pares = 0;  
for (let a =2; a<= N; a = a +=2) { 
soma_dos_pares +=a; 
} console.log(`A soma dos pares é = ${soma_dos_pares}`)


let multiplos_de_3 = 0; 
for(let b = N; b>=1; b--){ 
if( b %3 ===0 ) { 
multiplos_de_3 = multiplos_de_3 +1  
}
} console.log(`Multiplos de 3: ${multiplos_de_3}`)

let soma_dos_impares = 0;  
let c = 1; 

while (Number.isNaN(c<=N)){
    if(c % 2 !== 0 ) {
} c++ 
}console.log(`Soma dos impares:${soma_dos_impares} `)

let soma_dos_quadrados = 0;
let d = 0;

for(let d = 1; d<=N; d++){
    soma_dos_quadrados += d**2;
}
 console.log(`Soma dos quadrados: ${soma_dos_quadrados}`); } else {
    console.log('O valor digitado é invalido!')
 }
