//CLASSIFICADOR + DESCONTO
/*
Objetivo
Classificar nota com else if e aplicar desconto com cupom bonus5 para
conceitos A ou B.
Instruções:
1. Ler nota (0..10) com normalização
2. Classificar com else if: A(≥9), B(≥7), C(≥5), D(<5)
3. Ler cupom (bonus5/nenhum) normalizado
4. Se conceito A ou B E cupom "bonus5":
 • Aplicar 5% de desconto em base = 300
 • Mostrar total com toFixed(2)
5. Senão, apenas mostrar o conceito

Lógica do desconto:
 • Base fixa: R$ 300,00
 • Desconto: 5% (300 * 0.05 = 15)
 • Total: 300 - 15 = R$ 285,00
 • Só aplica se conceito A ou B
 
 Exemplos esperados
Caso 1: nota=8.5, cupom=bonus5
 Conceito B - Total: R$ 285.00
Caso 2: nota=6.0, cupom=bonus5
 Conceito C (sem desconto)
Caso 3: nota=9.5, cupom=nenhum
 Conceito A (sem desconto)
 
*/