//testando operadores de comparação e lógicos

/* 
Compare os valores e exiba True/False: 10 == "10", 10 === "10", 5 > 3, 8 <= 8
// 1) Comparações Básicas*/
console.log(10 == "10"); // True ou False?
console.log(10 === "10"); // Complete os demais: 5 > 3, 8 <= 8
console.log(5>3);
console.log(8 <= 8);

/*2 Operadores Lógicos
Teste: true && false, true || false, !true, !false
// 2) Operadores Lógicos */
console.log(true && false); // False // Complete os outros 3 casos:
true || false, !true, !false 
console.log( true || false);
console.log(!true);
console.log(!false);

/* 3 Validação de Idade 
Idade = 17. //Verifique se pode votar (>=16) E dirigir (>=18).
// 3) Validação de Idade*/
const idade = 17;
const podeVotar = (idade >= 16); //complete 
const podeDirigir = (idade >= 18); //complete 


/* 4 Sistema de Login
Usuario = "admin", senha = "123". Verifique se ambos estão corretos.
// 4) Sistema de Login */
const usuario = "admin";
const senha = "123";
const loginValido = (usuario + senha); // complete



/* 5 Classificação de Nota
Nota = 7.5. Verifique: aprovado (>=7), com distinção (>=9), reprovado (<7).
// 5) Classificação de Nota */
const nota = 7.5;
const aprovado = (nota >= 7); //>= 7 ;
const distincao = (nota >= 9);
const reprovado = (nota < 7);

/*6 Desafio: Acesso Restrito
Idade=20, isAdmin=false, isVIP=true. Acesso liberado se: admin OU (VIP E
idade>=18)
// 6) Desafio: Acesso Restrito
// Regra: admin OU (VIP E idade >= 18) */
const idade_2 = 20, isAdmin = false, isVIP = true
if (isAdmin = false ) {
    console.log('Acesso negado!')
} if (isVIP= true,idade_2 >= 18) {
    console.log('acesso permitido!')
};





