const {soma,multiplicacao} = require('./math');
const {e_numero} = require('./validação');
function calcular_area(base,altura) {
    if(!e_numero(base) || !e_numero(altura)) {
        return null;
    }
    return multiplicacao(base,altura) / 2;
}