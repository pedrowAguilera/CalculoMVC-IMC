class conta {
    static calcularIMC (peso, altura) {

    const alturaMetros = altura/100;

    const imc = peso / alturaMetros ** 2;
    return imc;

}}


module.exports = conta;