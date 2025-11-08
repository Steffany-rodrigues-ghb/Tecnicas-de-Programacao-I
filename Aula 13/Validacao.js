const input = require("readline-sync");

function validacao_de_usuario() {
  let adm = input.question("Digite seu usuario: ");
  adm = adm.trim().replace(",", ".").toLowerCase();

  if (adm !== "steffany") {
    console.log("Usuário incorreto");
    return;
  }

  let senha = input.question("Digite sua senha: ");
  if (senha === "steffany123") {
    console.log("Acesso Liberado");
  } else {
    console.log("Acesso negado");
  }
}

validacao_de_usuario();
