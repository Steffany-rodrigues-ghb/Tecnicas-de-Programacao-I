const rs = require('readline-sync')
// primeira leitura
let nota = Number(rs.question("Nota (0.10):").trim().replace("," , "."))
// continua enquanto a nota for invalida
while (Number.isNaN(nota) || nota<0 || nota>10) {
    console.log('Invalida. Tente de novo.');
    // le novamente ate obter valor valido
    nota = Number(rs. question ('Nota (0..10):')).trim().replace(',' , '.');
}
console.log('OK,nota =', nota);



