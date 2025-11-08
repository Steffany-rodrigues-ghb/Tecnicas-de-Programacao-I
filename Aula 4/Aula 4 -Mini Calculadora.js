//NUMEROS FIXOS (TROQUE AQUI QUANDO QUISER)
const n10 = Number(10);
const n20 = Number(3);

//CALCULOS
const soma = n10+n20;
const subtracao = n10 - n20;
const multiplicacao = n10 * n20;
const divisao = n20 !== 0 ? n10/n20 : "Divisao por zero";

//EXIBIR RESULTADOS
const mensagem = `Resultados ,para ${n10}, e, ${n20};
Soma:${soma};
Subtracao:${subtracao};
Multiplicacao:${multiplicacao};
Divisao:${divisao};`
console.log(mensagem);

