//SISTEMA DE AVALIAÇÃO DE FUNCIONARIOS
/* 
Dados do Funcionário
1.Declare as variáveis com os dados da Maria: nome,idade,salario = 4500,tempo de empresa = 3,
avaliacao de desemprenho,é gerente = falso e é verdade que ela tem certificado.
*/
const nome_do_funcionario = 'Maria Rodrigues';
const idade_do_funcionario = 28;
const salario_do_funcionario = 4500;
const tempo_de_empresa = 3;
const avaliacao_de_desempenho = 9.0;
tem_certificado = true  // no enunciado fala :" é verdade que ela possui certificado,o que traduzindo para codigo é true"

/*   
2.Cálculos Salariais
-Aumento base 5% + bônus certificação R$ 300: 
*/
const aumento_do_salario = salario_do_funcionario * 0.05;
const bonus_certificação = 300;
const salario_final = salario_do_funcionario + aumento_do_salario +bonus_certificação;
const salario_final_sem_certificação = aumento_do_salario;
if (tem_certificado = true) {
    salario_final
} else  {
    salario_final_sem_certificação
}

/*  
3.Critérios de Promoção
Tempo >= 2 anos E avaliação >= 8.0:
const podeSerPromovida = /* complete ;
const podeSerGerente = podeSerPromovida && idade >= 25 &&
temCertificacao;
*/
const pode_ser_promovida = tempo_de_empresa>= 2 && avaliacao_de_desempenho >= 8.0 /* para poder ser promovido,o funcionario 
deve ter tempo de empresa maior ou igual a 2 anos e avaliação de desempenho maior ou igual a 8*/
const pode_ser_gerente = pode_ser_promovida && idade_do_funcionario >= 25 && tem_certificado; /* Para ser poder ser gerente o 
funcionario deve ter os requisitos de promocao,deve ter idade maior ou igual a 25 anos e possuir certificado    */
if (pode_ser_promovida = true) {
    const resposta_final = 'Sim ';
} else {
    resposta_final_promocao= 'Nao' ;
}

if (pode_ser_gerente = pode_ser_promovida) {
    const resposta_final_gerente = 'Sim;'
} else {
    resposta_final_gerente = 'Nao'
}
/*
4.4 Relatório Final
 Exiba todas as informações calculadas: */
console.log('RELATORIO!')
console.log(`Nome do funcionario(a): ${nome_do_funcionario}`);
console.log(`Novo Salario : ${salario_final} `);
console.log( `Pode ser promovido(a) : ${resposta_final_promocao}`);
console.log(`Pode ser gerente: ${resposta_final_gerente}`);

/* resultado esperado: Novo salário: R$ 5025
Pode ser promovido: True
Pode ser gerente: True
*/