// ideia: adicionar variavel a frete e selecionar um valor para cada estado,mudando de acordo com o estado
// Caixa de itens
const input = require("readline-sync")
let quantidade_de_itens = 0;
quantidade_de_itens = Number(input.question('Digite a quantidade de itens: '));
let subtotal = 0;
let= preço_do_item = 0;
let quantidade_do_item = 0;
let total = 0;
 const frete_Acre = 20;
 const frete_Alagoas = 25;
 const frete_Amapa = 30;
 const frete_amazonas= 35;
 const frete_bahia = 40;
 const frete_ceara = 45;
 const frete_distrito_federal = 50;
 const frete_espirito_santo = 55;
 const frete_goias = 60;
 const frete_maranhao = 65;
 const frete_mato_grosso = 70;
 const frete_mato_grosso_do_sul = 75;
 const frete_minas_gerais = 70;
 const frete_para = 75;
 const frete_paraiba = 80;
 const frete_parana = 90;
 const frete_pernambuco = 95;
 const frete_piaui = 100;
 const frete_rio_de_janeiro = 105;
 const frete_rio_grande_do_norte = 110;
 const frete_rio_grande_do_sul = 115;
 const frete_roraima = 120;
 const frete_rondonia = 125;
 const frete_santa_catarina = 130;
 const frete_sao_paulo = 135;
 const frete_sergipe = 140;
 const frete_tocantins = 145;

for(let i = 1;i<= quantidade_de_itens; i++) {
    console.log(`Item : ${i}`);
    preço_do_item = input.question('Digite o valor do item: ');
    quantidade_do_item = input.question('Digite a quantidade do item: ');
    subtotal += preço_do_item * quantidade_do_item ;
} console.log(`Subtotal : ${subtotal} `);
const estado = input.question('Digite o estado de entrega: ')
if(estado !== frete_Acre ){
    console.log('O estado digitado é invalido!')
} else{
    if(subtotal < 200 ){
total = subtotal + frete;
console.log(`O frete é $${frete}`);
console.log(`O total é: ${total}`);
} else {
    total = subtotal;
    console.log(`O total é ${subtotal}`);
}

}

/*
let frete = estado;
 const frete_Acre = 20;
 const frete_Alagoas = 25;
 const frete_Amapa = 30;
 const frete_amazonas= 35;
 const frete_bahia = 40;
 const frete_ceara = 45;
 const frete_distrito_federal = 50;
 const frete_espirito_santo = 55;
 const frete_goias = 60;
 const frete_maranhao = 65;
 const frete_mato_grosso = 70;
 const frete_mato_grosso_do_sul = 75;
 const frete_minas_gerais = 70;
 const frete_para = 75;
 const frete_paraiba = 80;
 const frete_parana = 90;
 const frete_pernambuco = 95;
 const frete_piaui = 100;
 const frete_rio_de_janeiro = 105;
 const frete_rio_grande_do_norte = 110;
 const frete_rio_grande_do_sul = 115;
 const frete_roraima = 120;
 const frete_rondonia = 125;
 const frete_santa_catarina = 130;
 const frete_sao_paulo = 135;
 const frete_sergipe = 140;
 const frete_tocantins = 145;
*/
/*
Acre: (AC)
Alagoas: (AL)
Amapá: (AP)
Amazonas: (AM)
Bahia: (BA)
Ceará: (CE)
Distrito Federal: (DF)
Espírito Santo: (ES)
Goiás: (GO)
Maranhão: (MA)
Mato Grosso: (MT)
Mato Grosso do Sul: (MS)
Minas Gerais: (MG)
Pará: (PA)
Paraíba: (PB)
Paraná: (PR)
Pernambuco: (PE)
Piauí: (PI)
Rio de Janeiro: (RJ)
Rio Grande do Norte: (RN)
Rio Grande do Sul: (RS)
Rondônia: (RO)
Roraima: (RR)
Santa Catarina: (SC)
São Paulo: (SP)
Sergipe: (SE)
Tocantins: (TO) 
*/