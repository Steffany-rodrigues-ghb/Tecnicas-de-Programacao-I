const rs = require('readline-sync')

let soma = 0; // primeira leitura (antes do laço)
let n =Number (rs .question('Numero(0 sai):').trim().replace(',' , '.')); // continua enquanto nao for 0 e for um numero valido
while(!Number.isNaN(n) && n !== 0) {
    soma = soma + n ;// proxima leitura(dentro do laço)
    n = Number(rs.question('Numero (0 sai):') .trim ().replace("," , "."));

}
console.log('Soma :', soma);

