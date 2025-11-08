function e_numero(valor) {
    return typeof valor === 'number';
}

function e_positivo(num) {
    return num >0;
}
module.exports = {e_numero,e_positivo};

