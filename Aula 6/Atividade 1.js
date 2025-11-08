//CALCULADORA COM MENU
/*   
OBJETIVO:
Criar uma calculadora que lê dois números e uma operação, normaliza a
entrada, usa switch e valida divisão por zero.
Instruções:
1. Ler dois números (A e B) com normalização
2. Ler operação (soma/sub/mult/div) normalizada
3. Validar se os números são válidos
4. Usar switch para escolher a operação
5. Validar divisão por zero
6. Mostrar resultado com toFixed(2) se necessário.
REQUISITOS OBRIGATORIOS:

 • Use .trim().replace(",", ".") nos números
 • Use .trim().toLowerCase() na operação
 • Valide com Number.isNaN()
 • Use switch com break em cada case
 • Trate divisão por zero com process.exit(1)

 Exemplo de saída esperada
Entrada: A=10, B=3, operacao=div
Saída: Resultado: 3.33
Entrada: A=10, B=0, operacao=div
Saída: Divisao por zero  
*/