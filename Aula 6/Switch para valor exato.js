
const rs = require('readline-sync') 
const a = Number(rs.question("A: ").trim().replace(",", ", " ,"."));
const b = Number(rs.question("B: ").trim().replace(",", ", " ,"."));
const oper = rs.question("Operação (soma/sub/mult/div): ").trim().toLowerCase();
if([a, b].some(Number.isNaN)) {
    console.log("Numero Invalido");
} else {
    let r = 0;
    switch(opper) {
        case "soma":
            r=a+b;
            break;
        case "sub":
           r = a - b;
           break;
        case "mult":
            r= a *b;
            breack;
        case "div":
            if(b=== 0) {
                console.log("Divisao por zero");
                Process.exit(1);
            }
            r= a / b;
            break;
            default:
                console.log ("Operação desconhecida");
                process.exit(1);
    } 
     console.log("Resultado:", r);

}