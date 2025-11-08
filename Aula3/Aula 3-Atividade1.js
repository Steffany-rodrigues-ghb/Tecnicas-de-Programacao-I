// 1.Calculadora Básica : Variáveis: a = 15, b = 4. Calcule: soma, subtração, multiplicação, divisão, módulo e potencia.
const a = 15
const b = 4; 
console.log(a + b); 
console.log(a -b);
console.log(a * b);
console.log(a /b);
console.log(a % b);
console.log(a ** b);

/* 2.Verificador de Paridade
Use número = 27 e operador módulo para verificar se é par ou ímpar.*/
const numero = 27; // Complete com % e console.log
const e_par = numero % 2 ===0   //estudar mais a fundo essa parte
console.log(e_par);

/*3. Área do Círculo
Raio = 5, π = 3.14159. Fórmula: área = π × raio² */
const pi = 3.14159, raio = 5; // Complete: area = pi * raio ** 2
const area = pi * raio **2
console.log( area);

/* 4.Conversão °C para °F
25°C para Fahrenheit. Fórmula: F = (C × 9/5) + 32 */
const celsius = 25; // Complete a fórmula
const F = (celsius * (9/5) + 32);
console.log(F);

/*5. Média Ponderada
P1=8.5(peso 2), P2=7.0(peso 3), P3=9.2(peso 5) */
const p1=8.5, p2=7.0, p3=9.2; // (p1*2 + p2*3 + p3*5) / (2+3+5)
const media_ponderada = (p1*2) + (p2 *3) + (p3 *5 ) / (2+3+5);
console.log(media_ponderada);