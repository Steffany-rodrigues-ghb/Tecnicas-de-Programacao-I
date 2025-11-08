const input = require("readline-sync");

// perguntar se o usuario quer saber como funciona os paranaue
let informacoes = input.question("Voce quer saber as informacoes? (sim/nao): ").toLowerCase();

if (informacoes === "sim") {
  console.log("Uma senha será escolhida aleatoriamente entre uma lista de 25 senhas.");
  console.log("Você terá 5 tentativas para adivinhar a senha correta.");
  console.log("Você irá receber dicas após cada tentativa incorreta.");
  console.log("As 25 senhas estão divididas em 5 categorias: animais, nomes, estados brasileiros, flores e carros.");
  console.log("Segue a lista de senhas:");
  console.log("Animais: leao, tigre, gato, cachorro, elefante");
  console.log("Nomes: joao, maria, ana, carlos, beatriz");
  console.log("Estados brasileiros: ceara, amapa, acre, bahia, parana");
  console.log("Flores: rosa, violeta, girassol, margarida, tulipa");
  console.log("Carros: ferrari, camaro, mustang, corvette, porsche");

  // se quer saber as informacoes, viu e agr quer jogar
  let jogar_dps_das_info = input.question("Vamos jogar agora? (sim/nao): ").toLowerCase();

  if (jogar_dps_das_info === "sim") {
    iniciarJogo();
  } else {
    console.log("Tudo bem! Até a próxima.");}

} else {
  // se não quiser saber as informações, já começa o jogo direto
  console.log("Beleza! Vamos direto ao jogo.");
  iniciarJogo();}

// função que inicia o jogo (separada pra não repetir código) e n dar BO
function iniciarJogo() {

// estava dando erro pq nao tem como criar uma lista e colocar variavel e dentro dela atribuir algo
// criar as dicas
 const dicas = [
    "É conhecido como o rei da selva.", // 0 leao
    "É um grande felino listrado.",     // 1 tigre
    "É um animal de estimação muito comum.", // 2 gato
    "É conhecido como o melhor amigo do homem.", // 3 cachorro
    "É o maior mamífero terrestre.", // 4 elefante
    "É um nome muito comum no Brasil.", // 5 joao
    "É um nome feminino muito popular.", // 6 maria
    "É um nome curto e simples.", // 7 ana
    "É um nome masculino tradicional.", // 8 carlos
    "É um nome feminino que significa 'aquela que traz felicidade'.", // 9 beatriz
    "Famoso pela importância histórica do ciclo da borracha e biodiversidade amazônica.", // 10 acre
    "É famoso por suas belas praias e clima ensolarado.", // 11 ceara
    "Famosa por sua capital ser cortada pela linha do Equador.", // 12 amapa
    "É conhecido por seu carnaval e cultura afro-brasileira.", // 13 bahia
    "É conhecido por suas cataratas.", // 14 parana
    "É uma flor que simboliza o amor.", // 15 rosa
    "É uma flor de cor roxa.", // 16 violeta
    "É uma flor que segue o sol.", // 17 girassol
    "É uma flor branca com um centro amarelo.", // 18 margarida
    "É uma flor que vem em muitas cores.", // 19 tulipa
    "É uma marca de carros esportivos italiana.", // 20 ferrari
    "É um carro esportivo da Chevrolet.", // 21 camaro
    "É um carro esportivo da Ford.", // 22 mustang
    "É um carro esportivo da Chevrolet.", // 23 corvette
    "É uma marca de carros esportivos alemã." ];// 24 porsche 

  // criar uma lista que armazena tds
  const senhas = ["leao","tigre","gato","cachorro","elefante","joao","maria","ana","carlos","beatriz","acre","ceara","amapa","bahia","parana","rosa","violeta","girassol","margarida","tulipa","ferrari","camaro","mustang","corvette","porsche"];

  //fazer um randomizador com math.random
  function getrandom(min, max) {
    return Math.random() * (max - min + 1) + min; //função para gerar um número randomico entre min e max
  }

  // gerar um número randomico entre 0 e 24
  let numero_random = Math.floor(getrandom(0, 24)); // math.floor para arredondar para baixo,pegado da documentação

  //determina a senha
  let senha_escolhida = senhas[numero_random]; // armazena a senha escolhida

  // criar variaveis de tentativas
  let tentativas = 5;
  let acertou = false;

  // criar o loop de tentativas para o usuario
  while (tentativas > 0 && !acertou) {
    console.log(`\nVocê tem ${tentativas} tentativas restantes.`);
    let chute = input.question("Digite sua senha: ");

    if (chute === senha_escolhida) {
  acertou = true;
  console.log("Parabéns! Você adivinhou a senha!");
} else {
  tentativas--;
  console.log("Senha incorreta!");
  console.log(`Dica: ${dicas[numero_random]}`);}}

  // fornecer a resposta se o usuário não acertar
  if (!acertou) {
    console.log(`A senha correta era: ${senha_escolhida}`);}

// criar um loop para pedir se o usuario quer jogar novamente
  let jogar_novamente = input.question("Voce quer jogar novamente? (sim/nao): ").toLowerCase();
  if (jogar_novamente === "sim") {
    console.log("Reiniciando o jogo...");
    iniciarJogo(); // chama a função de novo
  } else if (jogar_novamente === "não" || jogar_novamente === "nao") {
    console.log("Obrigado por jogar!");
  } else {
    console.log("Resposta inválida. O jogo será reiniciado automaticamente.");
    iniciarJogo();}}
  
    //
