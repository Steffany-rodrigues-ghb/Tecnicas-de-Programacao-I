const input = require("readline-sync");


// Caixa de itens

let quantidade_de_itens = 0;
quantidade_de_itens = Number(input.question('Digite a quantidade de itens: '));
let subtotal = 0;
let= preço_do_item = 0;
let quantidade_do_item = 0;
let total = 0;
for(let i = 1;i<= quantidade_de_itens; i++) {
    console.log(`Item : ${i}`);
    preço_do_item = input.question('Digite o valor do item: ');
    quantidade_do_item = input.question('Digite a quantidade do item: ');
    subtotal += preço_do_item * quantidade_do_item ;
} console.log(`Subtotal : ${subtotal} `);
if(subtotal < 200 ){
total = subtotal + 20;
console.log(`O frete é "$20"`);
console.log(`O total é: ${total}`);
} else {
    total = subtotal;
    console.log(`O total é ${subtotal}`);
}
